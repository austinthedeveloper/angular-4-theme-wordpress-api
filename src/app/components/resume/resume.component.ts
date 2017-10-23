import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumeData: any[];
  resumeUrl = 'src/app/components/resume/';
  resumeCardUrl = 'src/app/components/resume-card/';
  files = [
    `${this.resumeUrl}resume.component.ts`,
    `${this.resumeUrl}resume.resolver.ts`,
    // `${this.resumeUrl}resume.component.html`,
    // `${this.resumeCardUrl}resume-card.component.html`,
    `${this.resumeCardUrl}resume-card.component.scss`
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resumeData = this.route.snapshot.data['detail'];
  }

}
