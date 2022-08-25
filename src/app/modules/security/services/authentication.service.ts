import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  LoginCall(username: string, password: string): Observable<any> {
    const params = new HttpParams({fromObject: {username, password}})
    return this._http.get(environment.api.url + '/account/log-in', { params });
  }
}
