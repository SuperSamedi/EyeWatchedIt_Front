import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: BehaviorSubject<any | null> = new BehaviorSubject(null);

  get User(): Observable<any | null> {
    return this._user.asObservable();
  }


  constructor() {
    const user = localStorage.getItem("user");
    if (user) {
      this._user.next(user);
    }
  }


  login(user: any) {
    this._user.next(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    this._user.next(null);
    localStorage.removeItem("user");
  }
}
