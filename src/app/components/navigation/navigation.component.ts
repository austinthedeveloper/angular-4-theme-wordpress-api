import { MenuItem } from './../main-sidenav/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input()
  'items': MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
