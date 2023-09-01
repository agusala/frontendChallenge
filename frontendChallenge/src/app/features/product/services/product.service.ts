import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SessionService } from "src/app/auth/session.service";
import { GLOBAL } from "src/app/shared/service/GLOBLAL";
import { BaseCRUDService } from "src/app/shared/service/base-crud.service";
import { Product } from "../models/product";


@Injectable({ providedIn: 'root' })

export class ProductService extends BaseCRUDService{
public url :string
  constructor(
    public http: HttpClient,
    public sessionService: SessionService,

  ){
    super(http, sessionService);
    this.url = GLOBAL.url + '/productos';
    }

    getProducts(){
      return super.get(this.url).pipe(map((res:any) => res.data))
    }

    getProduct(id:string):Observable<any>{
      return super.get(this.url + '/' + id).pipe(map((res:any) => res.data))
    }

    createProduct(product:Product){
      return super.post(this.url, product).pipe(map((res:any) => res.data))
    }

    editProduct(idProduct?:string,product?:Product){
      return super.post(this.url+'/' +idProduct,product).pipe(map((res:any) => res.data))
    }

    deleteProduct(_id:string){
      console.log(_id)
      return super.post(this.url + '/eliminar', {id:_id} ).pipe(map((res:any) => res.data))
    }
  }