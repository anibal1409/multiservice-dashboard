import {
  CommonModule,
  CurrencyPipe,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { CategoriesModule } from '../caterogies';
import { GetTypesExamService } from '../caterogies/use-cases';
import {
  StateModule,
  TableModule,
} from '../common';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
import { ExamsService } from './exams.service';
import { FormComponent } from './form/form.component';
import { ExamMemoryService } from './memory';
import {
  CreateExamService,
  DeleteExamService,
  FindExamService,
  GetExamsService,
  UpdateExamService,
} from './use-cases';

@NgModule({
  declarations: [
    ExamsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    StateModule,
    MatSelectModule,
    MatCheckboxModule,
    CurrencyMaskModule,
    CategoriesModule,
  ],
  providers: [
    ExamsService,
    ExamMemoryService,
    CreateExamService,
    DeleteExamService,
    FindExamService,
    GetExamsService,
    UpdateExamService,
    GetTypesExamService,
    CurrencyPipe,
  ]
})
export class ProductsModule { }
