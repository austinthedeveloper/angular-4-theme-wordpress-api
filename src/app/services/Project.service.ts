import { WORDPRESS_URL } from './../shared/api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  private url = `${WORDPRESS_URL}/projects/`;

  constructor(private http: HttpClient) { }

  get(slug: string = ''): Observable<any> {
    const params = {
      params: new HttpParams().set('slug', slug)
    };
    return this.http
      .get<any>(`${this.url}`, params);
  }

  getAll(): Observable<any> {
    const params = {
      params: new HttpParams().set('per_page', '100')
    };
    return this.http
      .get<any>(`${this.url}`, params);
  }

}
