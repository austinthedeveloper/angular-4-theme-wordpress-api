import { MenuService } from './services/Menu.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { NavigationStart, ResolveStart, Router, RoutesRecognized, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  processing$: Observable<boolean>;
  private fragment: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.processing$ = this.router.events
    .map(event => event instanceof NavigationStart ||
    event instanceof RoutesRecognized ||
    event instanceof ResolveStart);

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      console.log('hit');
      document.getElementById('content').scrollTop = 0;
    });
  }


}
