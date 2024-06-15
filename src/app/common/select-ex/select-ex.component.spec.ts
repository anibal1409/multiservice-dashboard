import { CommonModule } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SelectExComponent } from './select-ex.component';

describe('SelectExComponent', () => {
  let component: SelectExComponent;
  let fixture: ComponentFixture<SelectExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectExComponent],
      imports: [
        CommonModule,
        MatAutocompleteModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
      ],
    });
    fixture = TestBed.createComponent(SelectExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
