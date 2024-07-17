import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TogglePasswordDirective } from './toggle-password.directive';

@NgModule({
  declarations: [
    TogglePasswordDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TogglePasswordDirective
  ],
})
export class TogglePasswordModule { }
