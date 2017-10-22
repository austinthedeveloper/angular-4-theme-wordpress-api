import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-check',
  templateUrl: './file-check.component.html',
  styleUrls: ['./file-check.component.scss']
})
export class FileCheckComponent implements OnInit {
  @Input() 'file': string;
  @Input() 'data';
  processed: boolean;


  constructor(private githubService: GithubService) { }

  ngOnInit() {
    if (!this.data && this.file) {
      this.getFile(this.file);
    }
  }

  getFile(file) {
    this.githubService.getFile(file, 'austinthedeveloper', 'angular-4-theme-wordpress-api')
    .subscribe((res) => {
      res.content = atob(res.content);
      this.data = res;
      this.processed = true;
    }, (err) => {
      console.log('error', err);
    });
  }

}
