import { WORDPRESS_URL } from './../shared/api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  private url = `${WORDPRESS_URL}/posts/`;

  constructor(private http: HttpClient) { }

  get(slug: string): Observable<any> {
    slug = slug || '';
    const params = {
      params: new HttpParams().set('filter[category_name]', slug)
    };
    return this.http
      .get<any>(`${this.url}`, params);
  }

}
