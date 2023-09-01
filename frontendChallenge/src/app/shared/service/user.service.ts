import { HttpClient } from "@angular/common/http";
import { BaseCRUDService } from "./base-crud.service";
import { GLOBAL } from "./GLOBLAL";
import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { Session } from "src/app/auth/model/session";
import { SessionService } from "src/app/auth/session.service";


@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseCRUDService{

  public url!: string;

  constructor(
    public override  _http: HttpClient,
    public sessionService: SessionService

  ){
    super(_http,sessionService);
    this.url=GLOBAL.url;
  }

  login(user:User):Promise<any>{
    console.log(user)
    return new Promise((resolve,reject)=>{
      let params = {
        username: user.userName,
        password: user.password,
      };
      return this._http.post(this.url + "/login", params).subscribe({
        next: (data: any) => {
          console.log(data)
          let user: User = new User(
            data.user.email,
            data.user.id,
            data.user.name,
            data.user.username,
            )

            let s = new Session(data.ATO, user);
          let session = this.sessionService.setSession(s);
          resolve(session);

      },

    error: (error: any) => {
      console.log(error);
      reject(error);
     },
      });
    });
  }
}