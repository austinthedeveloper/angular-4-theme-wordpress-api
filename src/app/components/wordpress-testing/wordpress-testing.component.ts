import { ProjectService } from './../../services/Project.service';
import { PageService } from './../../services/Page.service';
import { CategoryService } from './../../services/Category.service';
import { PostService } from './../../services/Post.service';
import { MenuService } from './../../services/Menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress-testing',
  templateUrl: './wordpress-testing.component.html',
  styleUrls: ['./wordpress-testing.component.scss']
})
export class WordpressTestingComponent implements OnInit {
  posts: any[] = [];
  post: any;
  categories: any[] = [];
  page: any;
  project: any;
  projects: any[] = [];

  constructor(
    private menuService: MenuService,
    private postService: PostService,
    private categoryService: CategoryService,
    private pageService: PageService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    // Get all posts
    this.postService.getAll()
    .subscribe(
      data => this.posts = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );

    // Get a post
    this.postService.get('create-a-category-route')
    .subscribe(
      data => this.post = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );

    // Get a category
    this.categoryService.get('angular-wordpress-theme')
    .subscribe(
      data => this.categories = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );

    // Get a page
    this.pageService.get('286')
    .subscribe(
      data => this.page = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );

    // Get a project
    this.projectService.get()
    .subscribe(
      data => this.project = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );

    // Get projects
    this.projectService.getAll()
    .subscribe(
      data => this.projects = data,
      err => {
        console.log('Something went wrong!', err);
      }
    );

  }


  }
