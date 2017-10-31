/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetroAchievementsComponent } from './retro-achievements.component';

describe('RetroAchievementsComponent', () => {
  let component: RetroAchievementsComponent;
  let fixture: ComponentFixture<RetroAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
