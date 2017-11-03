import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

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
  // @Input()
  // 'feed' = this.route.snapshot.data['feed'];
  user: string;

  limit = 5;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['user'];
    console.log('test', this.user);
  }

}
