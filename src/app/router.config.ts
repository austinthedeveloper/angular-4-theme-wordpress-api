import { RetroGameProgressComponent } from './components/retro-game-progress/retro-game-progress.component';
import { RetroUserDetailsComponent } from './components/retro-user-details/retro-user-details.component';
import { RetroResolver, RetroUsersResolver, RetroUserResolver, RetroGameProgressResolver } from './components/retro/retro.resolver';
import { RetroComponent } from './components/retro/retro.component';
import { ModulesComponent } from './components/modules/modules.component';
import { TestingComponent } from './components/testing/testing.component';
import { MainResolver } from './components/main/main.resolver';
import { AboutTheSiteResolver, GithubIssueResolver } from './components/about-the-site/about-the-site.resolver';
import { AboutTheSiteComponent } from './components/about-the-site/about-the-site.component';
import { ContactResolver } from './components/contact/contact.resolver';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectResolver } from './components/project/project.resolver';
import { ProjectsResolver } from './components/projects/projects.resolver';
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
    component: MainComponent,
    resolve: {
      detail: MainResolver
    }
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
    component: ProjectsComponent,
    resolve: {
      detail: ProjectsResolver
    }
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    resolve: {
      detail: ProjectResolver
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: {
      detail: ContactResolver
    }
  },
  {
    path: 'about-the-site',
    component: AboutTheSiteComponent,
    resolve: {
      detail: AboutTheSiteResolver,
      issues: GithubIssueResolver
    }
  },
  {
    path: 'wordpress',
    component: WordpressTestingComponent
  },
  {
    path: 'modules',
    component: ModulesComponent
  },
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: 'retro',
    component: RetroComponent,
    resolve: {
      detail: RetroUsersResolver
    }
  },
  {
    path: 'retro/user/:user',
    component: RetroUserDetailsComponent,
    resolve: {
      detail: RetroUserResolver
    }
  },
  {
    path: 'retro/user/:user/:game',
    component: RetroGameProgressComponent,
    resolve: {
      detail: RetroGameProgressResolver
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];
