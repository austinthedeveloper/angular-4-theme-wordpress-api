import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class GithubService {
  private gitUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getUser(user: any): Observable<any> {
    const url = `${this.gitUrl}users/${user}/events`;

    return this.http
      .get<any>(`${url}`)
      .map(x => {
        x = _.filter(x, {type: 'PushEvent'});
        x = _.map(x, (item: any) => {
          const items = item.payload.size > 1 ? 'Items' : 'Item';
          const obj = {
            source: 'github',
            id: item.id,
            url: item.repo.url,
            type: item.type,
            repo: item.repo,
            message: `Pushed ${item.payload.size} ${items}`,
            date: item.created_at
          };
          return obj;
        });
        return x;
      });
  }

  getIssues(user: any, repo: any): Observable<any> {
    const url = `${this.gitUrl}repos/${user}/${repo}/issues`;

    const params = {
      params: new HttpParams().set('state', 'all')
    };
    return this.http
      .get<any>(`${url}`, params);
  }

}
