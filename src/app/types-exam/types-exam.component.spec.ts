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

import { StateModule } from '../common';
import {
  TableModule,
  TableService,
} from '../common/table';
import { TypesExamMemoryService } from './memory';
import { TypesExamComponent } from './types-exam.component';
import { TypesExamService } from './types-exam.service';
import {
  CreateTypeExamService,
  DeleteTypeExamService,
  FindTypeExamService,
  GetTypesExamService,
  UpdateTypeExamService,
} from './use-cases';

describe('TypesExamComponent', () => {
  let component: TypesExamComponent;
  let fixture: ComponentFixture<TypesExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
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
        BrowserAnimationsModule,
      ],
      declarations: [TypesExamComponent],
      providers: [
        TypesExamService,
        TypesExamMemoryService,
        CreateTypeExamService,
        DeleteTypeExamService,
        FindTypeExamService,
        UpdateTypeExamService,
        GetTypesExamService,
        TableService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    });
    fixture = TestBed.createComponent(TypesExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
