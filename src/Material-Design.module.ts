import {MatButtonModule, MdCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatTooltipModule, MatCardModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatSidenavModule, MatTooltipModule, MatCardModule, MatProgressSpinnerModule],
})
export class MdModules { }
