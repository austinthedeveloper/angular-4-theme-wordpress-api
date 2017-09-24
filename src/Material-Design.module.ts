import {MatButtonModule, MdCheckboxModule, MatSidenavModule, MatTooltipModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatTooltipModule],
  exports: [MatButtonModule, MatSidenavModule, MatTooltipModule],
})
export class MdModules { }
