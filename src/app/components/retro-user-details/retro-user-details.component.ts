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
  // @Input()
  // 'feed' = this.route.snapshot.data['feed'];

  limit = 5;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
