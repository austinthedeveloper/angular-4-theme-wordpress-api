import { GithubService } from './../../services/github.service';
import { PageService } from './../../services/Page.service';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AboutTheSiteResolver implements Resolve<any> {

  constructor(private pageService: PageService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.pageService.get('286');
  }

}
@Injectable()
export class GithubIssueResolver implements Resolve<any> {

  constructor(private githubService: GithubService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.githubService.getIssues('austinthedeveloper', 'Angular-Wordpress-Theme');
  }

}
