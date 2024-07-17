import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  StateModule,
  TableModule,
} from '../../common';
import { TypesExamMemoryService } from '../memory';
import { TypesExamService } from '../types-exam.service';
import {
  CreateTypeExamService,
  DeleteTypeExamService,
  FindTypeExamService,
  GetTypesExamService,
  UpdateTypeExamService,
} from '../use-cases';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        MatDialogModule,
        CommonModule,
        TableModule,
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule,
        StateModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      declarations: [FormComponent],
      providers: [
        TypesExamService,
        TypesExamMemoryService,
        CreateTypeExamService,
        DeleteTypeExamService,
        FindTypeExamService,
        UpdateTypeExamService,
        GetTypesExamService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
