import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-check-multiple',
  templateUrl: './file-check-multiple.component.html',
  styleUrls: ['./file-check-multiple.component.scss']
})
export class FileCheckMultipleComponent implements OnInit {
  @Input()
  'items': string[];

  constructor() { }

  ngOnInit() {
  }

}
