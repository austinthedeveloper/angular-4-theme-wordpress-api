import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.route.snapshot.data['detail'];
  }

}
