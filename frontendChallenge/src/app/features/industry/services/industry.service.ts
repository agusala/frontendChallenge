import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SessionService } from "src/app/auth/session.service";
import { GLOBAL } from "src/app/shared/service/GLOBLAL";
import { BaseCRUDService } from "src/app/shared/service/base-crud.service";
import { Industry } from "../models/industry";

@Injectable({ providedIn: 'root' })

export class IndustryService extends BaseCRUDService{
public url :string
  constructor(
    public http: HttpClient,
    public sessionService: SessionService,

  ){
    super(http, sessionService);
    this.url = GLOBAL.url + '/industrys';
    }

    getIndustrys(){
      return super.get(this.url).pipe(map((res:any) => res.data))
    }

    getIndustry(id:string):Observable<any>{
      return super.get(this.url + '/' + id).pipe(map((res:any) => res.data))
    }

    createIndustry(rubro:Industry){
      return super.post(this.url, rubro).pipe(map((res:any) => res.data))
    }

    editIndustry(idRubro?:string,rubro?:Industry){
      return super.post(this.url+'/' +idRubro,rubro).pipe(map((res:any) => res.data))
    }

    deleteIndustry(_id:string){
      console.log(_id)
      return super.post(this.url + '/eliminar', {id:_id} ).pipe(map((res:any) => res.data))
    }
  }