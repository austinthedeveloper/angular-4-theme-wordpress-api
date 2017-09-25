import { ProcessingService } from './../../services/Processing.service';
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

    constructor(private router: Router,
      private processingService: ProcessingService) {


    }

    ngOnInit() {

      this.processing$ = this.router.events
        .map(event => event instanceof NavigationStart ||
        event instanceof RoutesRecognized ||
        event instanceof ResolveStart);

      this.processingService.changePages()
      .subscribe(res => {
        // Find a way to move the above process to a service
        // console.log('res', res);
      });


    }

}
