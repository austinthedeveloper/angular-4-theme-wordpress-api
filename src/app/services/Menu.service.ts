import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MenuService {

  private url = `${environment.WORDPRESS_URL}/menus`;

  constructor(private http: HttpClient) { }

  get(id: string): Observable<any> {
    return this.http
      .get<any>(`${this.url}/${id}`);
  }

}
