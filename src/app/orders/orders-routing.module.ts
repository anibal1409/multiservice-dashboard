import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { FormComponent } from './form';
import { OrdersComponent } from './orders.component';
import { ReportComponent } from './report';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
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
export class OrdersRoutingModule { }
