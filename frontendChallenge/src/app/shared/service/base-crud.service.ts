import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/auth/session.service';

@Injectable()
export class BaseCRUDService {
  constructor(
    public _http: HttpClient,
    public storageSessionService: SessionService
  ) {}

  get(url:string): Observable<any> {

    return this._http.get(url);
  }

  post(url :string, body = {}): Observable<any> {
    return this._http.post(url, body);
  }

  put(url :string, body = {}): Observable<any> {
    return this._http.put(url, body);
  }

  delete(url:string,id:string): Observable<any> {
    return this._http.post(url,{id:id});
  }
}