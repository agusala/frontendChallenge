import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SessionService } from "src/app/auth/session.service";
import { Client } from "../models/client";
import { GLOBAL } from "src/app/shared/service/GLOBLAL";
import { BaseCRUDService } from "src/app/shared/service/base-crud.service";

@Injectable({ providedIn: 'root' })

export class ClientService extends BaseCRUDService{
public url :string
  constructor(
    public http: HttpClient,
    public sessionService: SessionService,

  ){
    super(http, sessionService);
    this.url = GLOBAL.url + '/clientes';
    }

    getClients(){
      return super.get(this.url).pipe(map((res:any) => res.data))
    }

    getClient(id:string):Observable<any>{
      return super.get(this.url + '/' + id).pipe(map((res:any) => res.data))
    }

    createClient(client:Client){
      return super.post(this.url, client).pipe(map((res:any) => res.data))
    }

    editClient(idClient?:string,client?:Client){
      return super.post(this.url+'/' +idClient,client).pipe(map((res:any) => res.data))
    }

    deleteClient(_id:string){
      console.log(_id)
      return super.post(this.url + '/eliminar', {id:_id} ).pipe(map((res:any) => res.data))
    }
  }