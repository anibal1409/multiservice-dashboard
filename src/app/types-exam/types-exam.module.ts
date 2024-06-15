import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  StateModule,
  TableModule,
} from '../common';
import { FormComponent } from './form/form.component';
import { TypesExamMemoryService } from './memory';
import { TypesExamRoutingModule } from './types-exam-routing.module';
import { TypesExamComponent } from './types-exam.component';
import { TypesExamService } from './types-exam.service';
import {
  CreateTypeExamService,
  DeleteTypeExamService,
  FindTypeExamService,
  GetTypesExamService,
  UpdateTypeExamService,
} from './use-cases';

@NgModule({
  declarations: [
    TypesExamComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    TypesExamRoutingModule,
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
  ],
  providers: [
    TypesExamService,
    TypesExamMemoryService,
    CreateTypeExamService,
    DeleteTypeExamService,
    FindTypeExamService,
    UpdateTypeExamService,
    GetTypesExamService,
  ]
})
export class TypesExamModule { }
