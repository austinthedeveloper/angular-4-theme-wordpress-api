import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retro-achievements',
  templateUrl: './retro-achievements.component.html',
  styleUrls: ['./retro-achievements.component.scss']
})
export class RetroAchievementsComponent implements OnInit {
  @Input()
  'items': any[];
  limit = 5;

  constructor() { }

  ngOnInit() {
  }

}
