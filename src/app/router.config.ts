import { WordpressTestingComponent } from './components/wordpress-testing/wordpress-testing.component';
import {Routes} from '@angular/router';

export const routerConfig: Routes = [
  {
    path: 'wordpress',
    component: WordpressTestingComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/wordpress'
  }
];
