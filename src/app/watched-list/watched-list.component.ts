import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Film} from "./film";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.css']
})
export class WatchedListComponent implements OnInit {

  films: Film[] | undefined;

  constructor( private http: HttpClient ) { }


  ngOnInit(): void {
    this.getList();
  }


  requestOptions = {
    observe: 'body' as const,
    responseType: 'json' as const,
  }

  getList() {
    this.http.get<Film[]>( environment.api.url + "/film/all", this.requestOptions)
      .subscribe(
        response => {
          console.log(response);
          this.films = response;
        }
      );
  }

  onSubmit(data: any) {
    this.http.post(environment.api.url + "/add", data).subscribe(
      response => {
        console.log(response);
        this.getList(); // Refresh list
      }
    );
  }

  delete(id: number) {
    this.http.delete(environment.api.url + "/" + id).subscribe( () => {
        this.getList();
      }
    );
  }
}
