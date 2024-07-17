import { Injectable } from '@angular/core';

import { ProductsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common';
import { examToExamItemVM } from '../../mappers';
import { ExamMemoryService } from '../../memory';
import {
  ProductItemVM,
  ProductVM,
} from '../../models';

@Injectable()
export class CreateExamService implements UseCase<ProductItemVM | null, ProductVM> {

  constructor(
    private httpService: ProductsService,
    private memoryService: ExamMemoryService,
  ) { }

  exec(data: ProductVM): Observable<ProductItemVM> {
    return this.httpService.productsControllerCreate(data)
      .pipe(
        map(examToExamItemVM),
        tap((item) => this.memoryService.create(item)),
      );
  }
}