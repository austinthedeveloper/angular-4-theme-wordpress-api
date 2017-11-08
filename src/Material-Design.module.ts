import {
  MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
  MatSlideToggleModule, MatFormFieldModule} from '@angular/material';
import { NgModule } from '@angular/core';

const list = [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
  MatSlideToggleModule, MatFormFieldModule];

@NgModule({
  imports: list,
  exports: list,
})
export class MdModules { }
