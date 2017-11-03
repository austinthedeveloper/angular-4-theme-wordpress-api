import {MatToolbarModule, MatButtonModule, MdCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
  MatSlideToggleModule, MatFormFieldModule} from '@angular/material';
import { NgModule } from '@angular/core';

const list = [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule,
  MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
  MatSlideToggleModule, MatFormFieldModule];
@NgModule({
  imports: list,
  exports: list,
})
export class MdModules { }
