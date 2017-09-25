import { ResumeResolver } from './components/resume/resume.resolver';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { BlogResolver } from './components/blog/blog.resolver';
import { PostResolver } from './components/post/post.resolver';
import { PostComponent } from './components/post/post.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AwardsResolver } from './resolvers/awards.resolver';
import { AboutResolver } from './resolvers/about.resolver';
import { PageComponent } from './components/page/page.component';
import { MainComponent } from './components/main/main.component';
import { WordpressTestingComponent } from './components/wordpress-testing/wordpress-testing.component';
import {Routes} from '@angular/router';

export const routerConfig: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: PageComponent,
    resolve: {
      detail: AboutResolver
    }
  },
  {
    path: 'awards',
    component: PageComponent,
    resolve: {
      detail: AwardsResolver
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    resolve: {
      detail: ResumeResolver
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    resolve: {
      detail: BlogResolver
    }
  },
  {
    path: 'post/:id',
    component: PostComponent,
    resolve: {
      detail: PostResolver
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectComponent
  },
  {
    path: 'wordpress',
    component: WordpressTestingComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];
