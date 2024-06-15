import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { FormComponent } from './form';
import { StudiesComponent } from './studies.component';

const routes: Routes = [
  {
    path: '',
    component: StudiesComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule { }
