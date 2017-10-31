import { RetroService } from './../../services/Retro.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class RetroUsersResolver implements Resolve<any> {
  constructor(private retroService: RetroService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.retroService.getTop10();
  }
}

@Injectable()
export class RetroPersonalResolver implements Resolve<any> {
  constructor(private retroService: RetroService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.retroService.getUserRankAndScore('foleykoontz');
  }
}

@Injectable()
export class RetroUserResolver implements Resolve<any> {
  constructor(private retroService: RetroService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.retroService.getUserSummary(route.params['user']);
  }
}

@Injectable()
export class RetroGameProgressResolver implements Resolve<any> {
  constructor(private retroService: RetroService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.retroService.getUserGameProgress(route.params['user'], route.params['game']);
  }
}

@Injectable()
export class RetroResolver implements Resolve<any> {
  constructor(private retroService: RetroService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.retroService.getRecentlyPlayed('foleykoontz');
  }
}
