import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Injectable()
export class RetroService {
  private retroUrl = 'http://retroachievements.org/API/';
  private key = atob(environment.RetroApiKey);
  private user = 'foleykoontz';
  private params: HttpParams = new HttpParams().set('z', this.user).set('y', this.key)
  private data = {
    params: this.params
  };

  constructor(private http: HttpClient) { }

  getUserRankAndScore(user: any): Observable<any> {
    const url = `${this.retroUrl}API_GetUserRankAndScore.php`;

    console.log('params', this.params);
    this.params.append('u', user);
    console.log('params', this.params);

    return this.http
      .get<any>(`${url}`, this.data);
  }

}
