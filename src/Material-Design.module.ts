import {MatButtonModule, MdCheckboxModule, MatSidenavModule, MatTooltipModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatTooltipModule, MatCardModule],
  exports: [MatButtonModule, MatSidenavModule, MatTooltipModule, MatCardModule],
})
export class MdModules { }
