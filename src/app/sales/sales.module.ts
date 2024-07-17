import {
  CommonModule,
  CurrencyPipe,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import {
  SafeModule,
  StateModule,
  TableModule,
} from '../common';
import { CustomersModule } from '../customers';
import { ProductsModule } from '../products';
import { FormComponent } from './form/form.component';
import { SaleMemoryService } from './memory';
import { ReportComponent } from './report/report.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesService } from './sales.service';
import {
  CreateStudyService,
  DeleteStudyService,
  FindStudyService,
  GetStudiesService,
  ReportSaleService,
  ReportSalesService,
  UpdateStudyService,
} from './use-cases';

@NgModule({
  declarations: [
    SalesComponent,
    FormComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatCardModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    StateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CustomersModule,
    MatDividerModule,
    MatCheckboxModule,
    ProductsModule,
    CurrencyMaskModule,
    SafeModule,
  ],
  providers: [
    SalesService,
    SaleMemoryService,
    CreateStudyService,
    UpdateStudyService,
    DeleteStudyService,
    GetStudiesService,
    FindStudyService,
    CurrencyPipe,
    ReportSaleService,
    ReportSalesService,
  ],
})
export class SalesModule { }
