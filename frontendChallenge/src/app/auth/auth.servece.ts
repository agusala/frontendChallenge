import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from '../shared/service/GLOBLAL';
import { SessionService } from './session.service';
import { User } from '../shared/models/user';
import { Session } from './model/session';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url: string = GLOBAL.url;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  authenticate(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let params = {
        email: email,
        password: password,
      };
      return this.http.post(this.url + '/login', params).subscribe({
        next: (data: any) => {
          let user: User = new User(
            data.user
          );

          let s = new Session(data.ATO, user);
          let session = this.sessionService.setSession(s);
          resolve(session);
        },
        error: (err: any) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  logout() {
    this.sessionService.removeSession();
  }
}