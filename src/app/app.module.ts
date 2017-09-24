import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
import { KeysPipe } from './pipes/keys.pipe';
import { GithubService } from './services/github.service';
import { GithubComponent } from './components/github/github.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PageComponent } from './components/page/page.component';
import { routerConfig } from './router.config';
import { RouterModule } from '@angular/router';
import { WordpressTestingComponent } from './components/wordpress-testing/wordpress-testing.component';
import { ProjectService } from './services/Project.service';
import { ProcessingService } from './services/Processing.service';
import { PostService } from './services/Post.service';
import { PageService } from './services/Page.service';
import { CompanyService } from './services/Company.service';
import { CategoryService } from './services/Category.service';
import { MenuService } from './services/Menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// material design imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdModules } from './../Material-Design.module';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    PageComponent,
    PostComponent,
    PostsComponent,
    WordpressTestingComponent,
    MainSidenavComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    BrowserAnimationsModule,
    MdModules
  ],
  providers: [
    CategoryService,
    CompanyService,
    GithubService,
    MenuService,
    PageService,
    PostService,
    ProcessingService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
