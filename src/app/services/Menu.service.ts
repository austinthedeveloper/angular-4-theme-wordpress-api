import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MenuService {

  private url = 'http://austinthedeveloper.com/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  get(id: string): Observable<any> {
    return this.http
      .get<any>(`${this.url}/pages/${id}`);
  }

}
