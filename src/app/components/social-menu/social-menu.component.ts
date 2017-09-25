import { SocialItem } from './../main-sidenav/social-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-menu',
  templateUrl: './social-menu.component.html',
  styleUrls: ['./social-menu.component.scss']
})
export class SocialMenuComponent implements OnInit {
  @Input()
  'items': SocialItem[];

  constructor() { }

  ngOnInit() {
  }

}
