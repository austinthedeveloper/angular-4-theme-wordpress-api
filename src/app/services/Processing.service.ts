import {NavigationStart, ResolveStart, Router, RoutesRecognized} from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class ProcessingService {

constructor(private router: Router) { }

changePages() {
  return this.router.events
    .map(event => event instanceof NavigationStart ||
    event instanceof RoutesRecognized ||
    event instanceof ResolveStart);
}

}
