import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';

import { TypeExamItemVM } from '../../types-exam';
import { ExamsService } from '../exams.service';
import { ExamVM } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  id!: number;

  @Output()
  closed = new EventEmitter();

  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  submitDisabled = true;

  oldFormValue: ExamVM = {
    name: '',
    description: '',
    id: 0,
    status: true,
    price: 0,
    typesExam: {id: 0},
    unitedCheck: false,
    valuesCheck: false,
    united: undefined,
    values: undefined,
  };
  
  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  typesExam: Array<TypeExamItemVM> = [];

  constructor(
    private entityService: ExamsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ExamVM,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.entityService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.loadTypesExam();
    this.createForm();
    this.loadData();
  }

  loadTypesExam(): void {
    this.sub$.add(
      this.entityService.getTypesExam$().subscribe(
        (typesExam) => {
          this.typesExam = typesExam;
        }
      )
    );
  }

  loadData(): void {
    if (this.data?.id) {
      this.id = this.data?.id;
      this.sub$.add(
        this.entityService
          .find$({ id: this.id })
          .subscribe((entity) => {
            console.log(entity);
            
            if (entity) {
              this.oldFormValue = {
                ...entity,
                typesExam: entity.typesExam?.id as any,
              };
              this.form.patchValue(
                {
                  ...this.oldFormValue,
                },
                {
                  emitEvent: false,
                }
              );
            }
          })
      );
    }
  }

  clickClosed(): void {
    this.closed.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(200)]],
      id: [0],
      status: [true, [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]],
      typesExam: [null, [Validators.required]],
      unitedCheck: [false, [Validators.required]],
      valuesCheck: [false, [Validators.required]],
      united: [null],
      values: [null],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
      })
    );
  }

  clickSave(): void {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  private create(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.entityService
          .create({
            ...this.form.value,
            typesExam: { id: this.form.value.typesExam},
          })
          .subscribe(
            (data) => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

  private update(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.entityService
          .update({
            ...this.form.value,
            id: this.id,
            typesExam: { id: this.form.value.typesExam},
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

}
