import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { FormComponent } from './form';
import { ReportComponent } from './report';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
