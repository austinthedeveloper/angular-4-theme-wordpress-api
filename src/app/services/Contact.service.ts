import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ContactService {
  private url = `${environment.WORDPRESS_CONTACT_URL}/contact-forms/`;
  private inputRegex: RegExp = new RegExp('\[(text | textarea | email) \*? (\w | -)+\]');

  constructor(private http: HttpClient) { }

  getForm(id: string) {
    return this.http
      .get<any>(`${this.url}${id}`);
  }

  postForm(id: string, body: any) {
    const url = `${this.url}${id}/feedback`;
    body = this.buildData(body);
    return this.http
      .post<any>(url, body);
  }

  buildData(data: any) {
    const formData: FormData = new FormData();
    _.forEach(data, (i: string, k: string) => {
      formData.append(k, i);
    });
    return formData;
  }

  mapForm(body: any) {
    const test = this.inputRegex.exec(body);
    return body;
  }

}
