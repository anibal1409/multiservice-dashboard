import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        loadChildren: () => import('../products/exams.module').then(m => m.ProductsModule),
      },
      {
        path: 'customers',
        loadChildren: () => import('../customers/patients.module').then(m => m.CustomersModule),
      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/statistics.module').then(m => m.StatisticsModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('../caterogies/types-exam.module').then(m => m.CategoriesModule),
      },
      {
        path: 'sales',
        loadChildren: () => import('../sales/sales.module').then(m => m.SalesModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
