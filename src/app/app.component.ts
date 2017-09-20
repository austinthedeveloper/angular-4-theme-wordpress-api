import { MenuService } from './services/Menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.get('285')
    .subscribe(
      // Successful responses call the first callback.
      data => {
        console.log('data', data);
      },
      // Errors will call this callback instead:
      err => {
        console.log('Something went wrong!', err);
      }
    );

  }


}
