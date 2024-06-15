import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { FormComponent } from './form';
import { TypesExamComponent } from './types-exam.component';

const routes: Routes = [
  {
    path: '',
    component: TypesExamComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesExamRoutingModule { }
