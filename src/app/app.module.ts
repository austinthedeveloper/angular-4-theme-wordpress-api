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

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WordpressTestingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    CompanyService,
    MenuService,
    PageService,
    PostService,
    ProcessingService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
