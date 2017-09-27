import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-project',
  templateUrl: './github-project.component.html',
  styleUrls: ['./github-project.component.scss']
})
export class GithubProjectComponent implements OnInit {
  @Input()
  'project';

  data: any;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepo('austinthedeveloper', this.project)
    .subscribe(
      (res) => {
        console.log('hit', res);
        this.data = res;
      }
    );
  }

}
