import {MatToolbarModule, MatButtonModule, MdCheckboxModule, MatSidenavModule,
  MatTooltipModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
  MatSlideToggleModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule,
     MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
    MatSlideToggleModule],
  exports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatTooltipModule,
     MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatInputModule,
    MatSlideToggleModule],
})
export class MdModules { }
