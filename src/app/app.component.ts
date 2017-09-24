import { MenuService } from './services/Menu.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NavigationStart, ResolveStart, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  processing$: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.processing$ = this.router.events
    .map(event => event instanceof NavigationStart ||
    event instanceof RoutesRecognized ||
    event instanceof ResolveStart);
  }


}
