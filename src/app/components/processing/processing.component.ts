import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NavigationStart, ResolveStart, Router, RoutesRecognized} from '@angular/router';


@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss']
})
export class ProcessingComponent implements OnInit {

  processing$: Observable<boolean>;

    constructor(private router: Router) {


    }

    ngOnInit() {

      this.processing$ = this.router.events
        .map(event => event instanceof NavigationStart ||
        event instanceof RoutesRecognized ||
        event instanceof ResolveStart);


    }

}
