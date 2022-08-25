import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SessionService } from './modules/security/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EyeWatchedIt_Front';

  user: any | null = null;

  constructor(private _http: HttpClient, private _session: SessionService) {

  }

  logout() {
    this._session.logout();
  }

  ngOnInit() {
    this._session.User.subscribe( u => this.user = u );
  }
}
