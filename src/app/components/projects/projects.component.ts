import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = this.route.snapshot.data['detail'];

  projectUrl = 'src/app/components/projects/';
  files = [
    `${this.projectUrl}projects.component.ts`,
    `${this.projectUrl}projects.resolver.ts`,
    `${this.projectUrl}projects.component.html`,
    `${this.projectUrl}projects.component.scss`,
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
