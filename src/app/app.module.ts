import { ConsoleIdPipe } from './pipes/consoleId.pipe';
import { RetroGameProgressComponent } from './components/retro-game-progress/retro-game-progress.component';
import { RetroAchievementsComponent } from './components/retro-achievements/retro-achievements.component';
import { LimitToPipe } from './pipes/limitTo.pipe';
import { RetroUserDetailsComponent } from './components/retro-user-details/retro-user-details.component';
import { RetroResolver, RetroUsersResolver, RetroUserResolver,
  RetroGameProgressResolver, RetroPersonalResolver, RetroUserFeedResolver } from './components/retro/retro.resolver';
import { RetroComponent } from './components/retro/retro.component';
import { RetroService } from './services/Retro.service';
import { FileCheckMultipleComponent } from './components/file-check-multiple/file-check-multiple.component';
import { GithubProjectComponent } from './components/github-project/github-project.component';
import { ModulesComponent } from './components/modules/modules.component';
import { TruncatePipesModule } from 'angular-truncate-pipes';
import { CountToModule } from 'angular-count-to';
import { TestingComponent } from './components/testing/testing.component';
import { MainResolver } from './components/main/main.resolver';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material design imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdModules } from './../Material-Design.module';
import { MomentModule } from 'angular2-moment';
import { OrderModule } from 'ngx-order-pipe';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FileCheckComponent } from './components/file-check/file-check.component';

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
    LimitToPipe,
    NavigationComponent,
    SocialMenuComponent,
    TestingComponent,
    ModulesComponent,
    GithubProjectComponent,
    FileCheckComponent,
    FileCheckMultipleComponent,
    RetroComponent,
    RetroUserDetailsComponent,
    RetroAchievementsComponent,
    RetroGameProgressComponent,
    ConsoleIdPipe
],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    BrowserAnimationsModule,
    MdModules,
    CountToModule,
    TruncatePipesModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    OrderModule
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
    MainResolver,
    RetroService,
    RetroResolver,
    RetroUsersResolver,
    RetroUserResolver,
    RetroGameProgressResolver,
    RetroPersonalResolver,
    RetroUserFeedResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
