import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  private url = `${environment.WORDPRESS_URL}/projects/`;

  constructor(private http: HttpClient) { }

  get(slug: string = ''): Observable<any> {
    const params = {
      params: new HttpParams().set('slug', slug)
    };
    return this.http
      .get<any>(`${this.url}`, params)
      .map((x) => x[0]);
  }

  getAll(): Observable<any> {
    const params = {
      params: new HttpParams().set('per_page', '100')
    };
    return this.http
      .get<any>(`${this.url}`, params);
  }

}
