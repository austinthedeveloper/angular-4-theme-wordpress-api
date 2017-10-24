import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  'post'= this.route.snapshot.data['detail'];

  projectUrl = 'src/app/components/project/';
  files = [
    `${this.projectUrl}project.component.ts`,
    `${this.projectUrl}project.resolver.ts`,
    `${this.projectUrl}project.component.html`,
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
