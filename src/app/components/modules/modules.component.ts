import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  activeCount = {};
  count = {
    count: 100,
    from: 0,
    duration: 1
  };
  truncateWord = 'Austin The Developer Writes Code';

  constructor() { }

  ngOnInit() {
  }
}
