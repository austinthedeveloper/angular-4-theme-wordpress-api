import { PageService } from './../../services/Page.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input()
  'id';

  public page;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getPage(this.id);
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
