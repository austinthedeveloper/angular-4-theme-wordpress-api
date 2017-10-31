import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retro-game-progress',
  templateUrl: './retro-game-progress.component.html',
  styleUrls: ['./retro-game-progress.component.scss']
})
export class RetroGameProgressComponent implements OnInit {

  @Input()
  'data' = this.route.snapshot.data['detail'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
