import { Injectable } from '@angular/core';

import { ProductsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common';
import { examToExamItemVM } from '../../mappers';
import { ExamMemoryService } from '../../memory';
import { ProductItemVM } from '../../models';

@Injectable()
export class GetExamsService implements UseCase<Array<ProductItemVM> | null, BaseQuery> {

  constructor(
    private httpService: ProductsService,
    private memoryService: ExamMemoryService,
  ) {}

  exec(): Observable<Array<ProductItemVM>> {
    return this.httpService.productsControllerFindAll()
    .pipe(
      map((items: any) => items.map(examToExamItemVM)),
      tap((items) => {
        this.memoryService.setDataSource(items);
      })
    );
  }
}