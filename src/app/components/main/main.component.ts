import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: any = this.route.snapshot.data['detail'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
