import {MatToolbarModule, MatButtonModule, MdCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule,
     MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule],
  exports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule,
     MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule],
})
export class MdModules { }
