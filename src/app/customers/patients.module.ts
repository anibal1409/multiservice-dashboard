import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  NgxMaskDirective,
  NgxMaskPipe,
} from 'ngx-mask';

import {
  StateModule,
  TableModule,
} from '../common';
import { FormComponent } from './form/form.component';
import { PatientMemoryService } from './memory';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientsService } from './patients.service';
import {
  CreatePatientService,
  DeletePatientService,
  FindPatientByDocumentService,
  FindPatientService,
  GetPatientsService,
  UpdatePatientService,
} from './use-cases';

@NgModule({
  declarations: [
    PatientsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
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
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    PatientsService,
    PatientMemoryService,
    CreatePatientService,
    DeletePatientService,
    UpdatePatientService,
    FindPatientService,
    GetPatientsService,
    FindPatientByDocumentService,
  ]
})
export class CustomersModule { }
