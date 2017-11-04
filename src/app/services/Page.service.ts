import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PageService {

  private url = `${environment.WORDPRESS_URL}/pages/`;

  constructor(private http: HttpClient) { }

  get(id: string): Observable<any> {
    return this.http
      .get<any>(`${this.url}${id}`);
  }

}
