import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-the-site',
  templateUrl: './about-the-site.component.html',
  styleUrls: ['./about-the-site.component.scss']
})
export class AboutTheSiteComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data['detail'];
  }

}
