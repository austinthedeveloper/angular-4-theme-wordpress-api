import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-issues',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  issues: any;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.github();
  }

  github(user: string = 'austinthedeveloper', repo: string = 'Angular-Wordpress-Theme') {
    // Get projects
    this.githubService.getIssues(user, repo)
    .subscribe(
      data => this.issues = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );
  }

  status(status: string) {
    return 'git-list-item github-' + status;
  }

  statusIcon(status: string = '') {
    let res = '';
    switch (status) {
      case 'open':
        res = 'fa-warning';
        break;
      case 'closed':
        res = 'fa-check';
        break;
    }
    return res;
  }

}
