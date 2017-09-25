import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumeData: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resumeData = this.route.snapshot.data['detail'];
  }

}
