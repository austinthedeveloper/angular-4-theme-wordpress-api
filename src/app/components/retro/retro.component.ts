import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.scss']
})
export class RetroComponent implements OnInit {

  @Input()
  'data' = this.route.snapshot.data['detail'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
