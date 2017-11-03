import { RetroService } from './../../services/Retro.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-retro-user-details',
  templateUrl: './retro-user-details.component.html',
  styleUrls: ['./retro-user-details.component.scss']
})
export class RetroUserDetailsComponent implements OnInit {
  @Input()
  'data' = this.route.snapshot.data['detail'];
  @Input()
  'feed' = this.route.snapshot.data['feed'];
  user: string;
  refreshFeed: boolean;
  feedToggle: boolean;
  feedUpdated: Date;
  order = 'timestamp';

  limit = 5;

  constructor(private route: ActivatedRoute, private retroService: RetroService) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['user'];
    this.feedUpdated = new Date();
  }

  toggleFeed() {
    this.feedToggle = !this.feedToggle;
    this.refresh();
  }

  refresh() {
    if (this.feedToggle) {
      this.refreshFeed = true;
      this.feedUpdated = new Date();
      this.retroService.getUserFeed(this.user)
        .subscribe(
        (res) => {
          this.refreshFeed = false;
          this.feed = _.unionBy(this.feed, res, 'ID');
          this.timeout();
        },
        (err) => { });
    }
  }

  timeout(val = 10000) {
    setTimeout( () => {
      this.refresh();
    }, 10000);
  }

}
