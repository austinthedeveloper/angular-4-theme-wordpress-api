import {MatToolbarModule, MatButtonModule, MdCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule],
})
export class MdModules { }
