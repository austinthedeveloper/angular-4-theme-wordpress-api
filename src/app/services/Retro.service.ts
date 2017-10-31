import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Injectable()
export class RetroService {
  private retroUrl = `${environment.nodeServer}retro/`;
  private defaultUser = 'foleykoontz';

  constructor(private http: HttpClient) { }

  getTop10(): Observable<any> {
    const url = `${this.retroUrl}users`;
    return this.http
      .get<any>(`${url}`);
  }

  getUserRankAndScore(user: string = this.defaultUser): Observable<any> {
    const url = `${this.retroUrl}user/${user}`;
    return this.http
      .get<any>(`${url}`);
  }

  getUserFeed(user: string = this.defaultUser): Observable<any> {
    const url = `${this.retroUrl}user/${user}/feed`;
    return this.http
      .get<any>(`${url}`);
  }

  getUserSummary(user: string = this.defaultUser): Observable<any> {
    const url = `${this.retroUrl}user/${user}/summary`;
    return this.http
      .get<any>(`${url}`);
  }

  getUserGameProgress(user: string = this.defaultUser, game: string): Observable<any> {
    const url = `${this.retroUrl}user/${user}/game/${game}`;
    return this.http
      .get<any>(`${url}`);
  }

  getRecentlyPlayed(user: string = this.defaultUser): Observable<any> {
    const url = `${this.retroUrl}user/${user}/recent`;
    return this.http
      .get<any>(`${url}`);
  }

}
