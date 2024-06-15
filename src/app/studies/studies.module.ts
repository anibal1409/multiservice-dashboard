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
  StateModule,
  TableModule,
} from '../common';
import { ExamsModule } from '../exams';
import { PatientsModule } from '../patients';
import { FormComponent } from './form/form.component';
import { StudyMemoryService } from './memory';
import { StudiesRoutingModule } from './studies-routing.module';
import { StudiesComponent } from './studies.component';
import { StudiesService } from './studies.service';
import {
  CreateStudyService,
  DeleteStudyService,
  FindStudyService,
  GetStudiesService,
  UpdateStudyService,
} from './use-cases';

@NgModule({
  declarations: [
    StudiesComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    StudiesRoutingModule,
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
    PatientsModule,
    MatDividerModule,
    MatCheckboxModule,
    ExamsModule,
    CurrencyMaskModule,
  ],
  providers: [
    StudiesService,
    StudyMemoryService,
    CreateStudyService,
    UpdateStudyService,
    DeleteStudyService,
    GetStudiesService,
    FindStudyService,
    CurrencyPipe,
  ],
})
export class StudiesModule { }
