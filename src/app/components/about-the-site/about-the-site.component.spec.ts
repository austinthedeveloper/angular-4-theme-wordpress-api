import { PageComponent } from './../page/page.component';
import { GithubComponent } from './../github/github.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutTheSiteComponent } from './about-the-site.component';

describe('AboutTheSiteComponent', () => {
  let component: AboutTheSiteComponent;
  let fixture: ComponentFixture<AboutTheSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheSiteComponent,
        GithubComponent,
        PageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
