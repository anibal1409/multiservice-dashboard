import { Location } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';
import { ToastService } from 'toast';

import {
  CustomCurrencyMaskConfig,
} from '../../common/currency-mask/mask-config';
import { ProductItemVM } from '../../products';
import {
  OrderProduct,
  OrderVM,
} from '../models';
import {
  STAGE_SALE,
  StageOrder,
} from '../models/stage';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  id!: number;

  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  submitDisabled = true;

  oldFormValue: OrderVM = {
    status: true,
    id: 0,
    date: new Date().toDateString(),
    provider: '',
    deadline: undefined,
    stage: StageOrder.Required,
    orderProducts: [],
    total: 0,
    note: '',
  };

  stagesStudy = STAGE_SALE;

  optionsCurrency = CustomCurrencyMaskConfig;

  showValuesAccept = [
    StageOrder.Required,
  ];
  shoHiddenAccept = [
    StageOrder.Cancelled,
    StageOrder.Completed,
  ];
  hiddenFooter = false;
  showDelete = true;
  showPrint = false;

  productsBase: Array<ProductItemVM> = [];
  products: Array<ProductItemVM> = [];
  ctrlProduct = new FormControl();

  formDisabled = false;
  subArray$ = new Subscription();
  readonly maxDate = new Date();

  constructor(
    private entityService: OrdersService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private location: Location,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          if (queryParams['id']) {
            this.id = +queryParams['id'];
            this.loadData();
          }
        }
      )
    );
    this.sub$.add(
      this.entityService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.getProducts();
    this.createForm();
    this.loadData();
  }

  loadData(): void {
    if (this.id) {
      this.sub$.add(
        this.entityService
          .find$({ id: this.id })
          .subscribe((entity) => {
            console.log(entity);
            if (entity && !this.oldFormValue.id) {
              this.oldFormValue = {
                date: entity.date,
                deadline: entity.deadline,
                provider: entity.provider,
                stage: entity.stage,
                id: entity.id,

                total: entity.total,
                orderProducts: entity.orderProducts?.map(
                  (saleProduct) => {
                    return {
                      id: saleProduct.id,
                      productId: saleProduct.product?.id,
                      amount: saleProduct.amount,
                      name: saleProduct.product?.name,
                      price: saleProduct.price,
                      subtotal: saleProduct.subtotal,
                    };
                  }
                ),
              } as any;
              this.form.patchValue(
                {
                  ...this.oldFormValue,
                },
                {
                  emitEvent: false,
                }
              );
              this.updateShowPrint();
              if (entity?.orderProducts?.length) {
                for (const saleProduct of entity.orderProducts) {
                  this.addProduct(saleProduct);
                }
              }
              this.updateProductValue();
            }
          })
      );
    }
  }

  clickClosed(): void {
    this.router.navigate(['/dashboard/orders']);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      provider: [null, [Validators.required]],

      date: [new Date(), [Validators.required]],
      deadline: [null],
      note: [null],
      stage: [StageOrder.Required, [Validators.required]],
      id: [0],

      total: [{ value: 0, disabled: true }, [Validators.required]],
      orderProducts: this.formBuilder.array([], [Validators.required]),
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;

      })
    );

    this.sub$.add(
      this.form.get('stage')?.valueChanges.subscribe(
        () => {
          this.updateProductValue();
        }
      )
    );
  }

  private updateProductValue(): void {
    const stage = this.form.get('stage')?.value;
    this.hiddenFooter = this.shoHiddenAccept.includes(stage) && this.submitDisabled;
    this.showDelete = this.showValuesAccept.includes(stage);
    const disabled = !this.showValuesAccept.includes(stage);
    const formArray = this.orderProductsArray;
    for (let i = 0; i < formArray.length; i++) {
      if (disabled) {
        formArray.at(i).get('price')?.disable({emitEvent: false});
        formArray.at(i).get('amount')?.disable({emitEvent: false});
      } else {
        formArray.at(i).get('price')?.enable({emitEvent: false});
        formArray.at(i).get('amount')?.enable({emitEvent: false});
      }
    }
    if (!this.showValuesAccept.includes(stage)) {
      this.form.disable({ emitEvent: false });
      this.formDisabled = true;
      if (stage !== StageOrder.Completed || !this.submitDisabled) {
        this.form.get('stage')?.enable({emitEvent: false});
      }
    } else {
      this.form.enable({ emitEvent: false });
      this.formDisabled = false;
    }
  }

  get orderProductsArray() {
    return this.form.get('orderProducts') as FormArray;
  }

  addProduct(orderProduct?: OrderProduct) {
    if (this.ctrlProduct.valid || orderProduct) {
      const product: ProductItemVM = this.ctrlProduct.value;
      if (product || orderProduct) {
        this.orderProductsArray.push(this.formBuilder.group({
          id: [null || orderProduct?.id],
          productId: [product?.id || orderProduct?.product?.id, Validators.required],
          name: [{ value: product?.name || orderProduct?.product?.name, disabled: true }, Validators.required],
          amount: [orderProduct?.amount || 1, [Validators.required, Validators.min(0.01)]],
          price: [{ value: product?.price || orderProduct?.price, disabled: false }, [Validators.required, Validators.min(0.01)]],
          subtotal: [{ value: orderProduct?.subtotal || product?.price * 1 , disabled: true }],
        }));

        this.subArray$.unsubscribe();
        this.orderProductsArray.controls.forEach(
          (control) => {
            this.subArray$.add(
              () => {
                const form = (control as FormGroup);
                form.controls['amount']?.valueChanges.subscribe(
                  (amount) => {
                    form.patchValue({
                      subtotal: form.controls['price'].value * amount,
                    }, { emitEvent: false });
                    this.updateTotal();
                  }
                )
                form.controls['price']?.valueChanges.subscribe(
                  (price) => {
                    form.patchValue({
                      subtotal: form.controls['amount'].value * price,
                    }, { emitEvent: false });
                    this.updateTotal();
                  }
                )
              }
            );
          }
        );
        this.ctrlProduct.reset();
        this.updateProducts();
      }
    }
  }

  removeExam(index: number) {
    this.orderProductsArray.removeAt(index);
    this.updateProducts();
  }

  private updateProducts(): void {
    const productIds = this.orderProductsArray.value?.map((x: any) => x.productId);
    this.products = this.productsBase.filter((x) => !productIds.includes(x.id));
    this.updateTotal();
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
            ...this.form.getRawValue(),
          })
          .subscribe(
            (sale) => {
              if (sale?.stage) {
                this.updateShowPrint();
              }
              this.form.reset();
              this.clickClosed();
              this.toastService.success('¡Pedido creado exitosamente!');
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
            ...this.form.getRawValue(),
            id: this.id,
          })
          .subscribe(
            (sale) => {
              if (sale?.stage) {
                this.updateShowPrint();
              }
              this.form.reset();
              this.clickClosed();
              this.toastService.success('¡Pedido actualizado exitosamente!');
            }
          )
      );
    }
  }

  updateShowPrint(): void {
    this.showPrint = !!this.id;
  }

  private getProducts(): void {
    this.sub$.add(
      this.entityService.getProducts$().subscribe(
        (products) => {
          this.products = products;
          this.productsBase = products;
          this.updateProducts();
        }
      )
    );
  }

  private updateTotal(): void {
    const total: number = this.orderProductsArray
      .getRawValue()
      .reduce(
        (accumulator: number, currentValue: OrderProduct) => accumulator + +currentValue.subtotal, 0,
      );
    this.form.patchValue({
      total: total.toString(),
    });
  }

  back(): void {
    this.location.back();
  }


  generateReportSale(): void {
    this.sub$.add(
      this.entityService.generateReportOrder$({
        id: this.id
      }).subscribe(
        (report) => {
          const link = document.createElement('a');
          link.href = report?.reportUrl;
          link.target = '_black';
          link.download = report?.name;
          link.click();
        }
      )
    );
  }

}
