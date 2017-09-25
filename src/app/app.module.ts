import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialMenuComponent } from './components/social-menu/social-menu.component';
import { CapitalizePipe } from './pipes/Capitalize.pipe';
import { AboutTheSiteComponent } from './components/about-the-site/about-the-site.component';
import { AboutTheSiteResolver, GithubIssueResolver } from './components/about-the-site/about-the-site.resolver';
import { ContactResolver } from './components/contact/contact.resolver';
import { ProjectResolver } from './components/project/project.resolver';
import { ProjectsResolver } from './components/projects/projects.resolver';
import { ResumeResolver } from './components/resume/resume.resolver';
import { ResumeCardComponent } from './components/resume-card/resume-card.component';
import { ProcessingComponent } from './components/processing/processing.component';
import { BlogResolver } from './components/blog/blog.resolver';
import { PostResolver } from './components/post/post.resolver';
import { AwardsResolver } from './resolvers/awards.resolver';
import { AboutResolver } from './resolvers/about.resolver';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { BlogComponent } from './components/blog/blog.component';
import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
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
    BlogComponent,
    CategoryComponent,
    ContactComponent,
    MainComponent,
    ProjectComponent,
    ProjectsComponent,
    ResumeComponent,
    ResumeCardComponent,
    ProcessingComponent,
    AboutTheSiteComponent,
    CapitalizePipe,
    NavigationComponent,
    SocialMenuComponent
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
    ProjectService,
    AboutResolver,
    AwardsResolver,
    PostResolver,
    BlogResolver,
    ResumeResolver,
    ProjectResolver,
    ProjectsResolver,
    ContactResolver,
    AboutTheSiteResolver,
    GithubIssueResolver,
    ProcessingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
