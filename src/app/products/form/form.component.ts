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

import { CategoryItemVM } from '../../caterogies';
import {
  CustomCurrencyMaskConfig,
} from '../../common/currency-mask/mask-config';
import { ExamsService } from '../exams.service';
import { ProductVM } from '../models';

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

  oldFormValue: ProductVM = {
    name: '',
    description: '',
    id: 0,
    status: true,
    price: 0,
    category: {id: 0},
    stock: 0,
  };
  optionsCurrency = CustomCurrencyMaskConfig;
  
  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  categories: Array<CategoryItemVM> = [];

  constructor(
    private entityService: ExamsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProductVM,
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
          this.categories = typesExam;
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
            if (entity) {
              this.oldFormValue = {
                ...entity,
                category: entity.category?.id as any,
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
      price: [null, [Validators.required, Validators.min(0.01)]],
      category: [null, [Validators.required]],
      stock: [null, [Validators.required, Validators.min(1)]],
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
            category: { id: this.form.value.category},
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
            category: { id: this.form.value.category},
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
