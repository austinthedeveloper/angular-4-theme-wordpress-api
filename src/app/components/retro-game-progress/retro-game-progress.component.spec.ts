/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetroGameProgressComponent } from './retro-game-progress.component';

describe('RetroGameProgressComponent', () => {
  let component: RetroGameProgressComponent;
  let fixture: ComponentFixture<RetroGameProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroGameProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroGameProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
