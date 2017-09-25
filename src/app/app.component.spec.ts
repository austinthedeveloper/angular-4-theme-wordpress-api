import { ProcessingService } from './services/Processing.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ProcessingComponent } from './components/processing/processing.component';
import { MdModules } from './../Material-Design.module';
import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainSidenavComponent,
        ProcessingComponent
      ],
      providers: [
        ProcessingService
      ],
      imports: [
        MdModules,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
