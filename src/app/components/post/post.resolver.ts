import { PostService } from './../../services/Post.service';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PostResolver implements Resolve<any> {

  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.postService.get(route.params['id']);
  }

}
