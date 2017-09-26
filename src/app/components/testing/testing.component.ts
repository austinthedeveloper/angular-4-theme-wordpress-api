import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  activeCount = {};
  count = {
    count: 100,
    from: 0,
    duration: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
