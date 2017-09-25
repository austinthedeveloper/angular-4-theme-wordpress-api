import { Observable } from 'rxjs/Observable';
import { PageService } from './../../services/Page.service';
import {Resolve, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input()
  'id';

  @Input()
  'data' = this.route.snapshot.data['detail'];

  public page;
  resolveData;

  constructor(private pageService: PageService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.data) {
      this.page = this.data;
    } else if (this.id) {
      this.getPage(this.id);
    }
  }

  getPage(id: string = '') {
    // Get a page
    this.pageService.get(id)
    .subscribe(
      data => this.page = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );
  }

}
