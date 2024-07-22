import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import {
  searchCallback,
  StateService,
} from '../../common';
import { STAGE_SALE } from '../models/stage';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent  implements OnInit, OnDestroy {
  @HostBinding()
  class = 'app-page';
  form!: FormGroup;
  loading = false;
  submitDisabled = true;
  pdfSrc = '';
  searchCallback = searchCallback;

  stagesStudy = [
    {
      name: 'Todos',
      value: -1,
      disabled: false,
    } as any,
    ...STAGE_SALE
  ];

  private sub$ = new Subscription();
  readonly maxDate = new Date();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private salesService: SalesService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.salesService.getLoading$().subscribe((loading) => {
        this.stateService.setLoading(loading);
      })
    );
    this.createForm();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      start: [null, [Validators.required]],
      end: [null, [Validators.required]],
      stage: [-1],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
  }

  back(): void {
    this.router.navigate(['/dashboard/sales']);
  }

  generate(): void {
    if (!this.submitDisabled) {
      const values = this.form.value;
      this.sub$.add(
        this.salesService
          .generateReportSales({
            ...values,
            stage: values.stage === -1 ? null : values.stage,
          })
          .subscribe((src) => {
            this.pdfSrc = src?.reportUrl;
          })
      );
    }
  }
}