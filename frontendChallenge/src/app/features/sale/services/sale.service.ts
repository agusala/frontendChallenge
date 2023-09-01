import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SessionService } from "src/app/auth/session.service";
import { GLOBAL } from "src/app/shared/service/GLOBLAL";
import { BaseCRUDService } from "src/app/shared/service/base-crud.service";
import { Sale } from "../models/sale";



@Injectable({ providedIn: 'root' })

export class SaleService extends BaseCRUDService{
public url :string
  constructor(
    public http: HttpClient,
    public sessionService: SessionService,

  ){
    super(http, sessionService);
    this.url = GLOBAL.url + '/ventas';
    }

    getSales(){
      return super.get(this.url).pipe(map((res:any) => res.data))
    }

    getSale(id:string):Observable<any>{
      return super.get(this.url + '/' + id).pipe(map((res:any) => res.data))
    }

    createSale(sale:Sale){
      return super.post(this.url, sale).pipe(map((res:any) => res.data))
    }

    deleteSale(_id:string){
      console.log(_id)
      return super.post(this.url + '/eliminar', {id:_id} ).pipe(map((res:any) => res.data))
    }
  }