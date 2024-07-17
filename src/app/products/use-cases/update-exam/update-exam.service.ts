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
export class UpdateExamService implements UseCase<ProductItemVM | null, ProductVM>
{
  constructor(
    private httpService: ProductsService,
    private memoryService: ExamMemoryService,
  ) { }

  exec(data: ProductVM): Observable<ProductItemVM | null> {
    return this.httpService
      .productsControllerUpdate(
        data.id?.toString() || '0',
        {
          name: data.name,
          status: !!data.status,
          description: data.description,
          price: data.price,
          category: data.category,
          stock: data.stock,
        })
      .pipe(
        map(examToExamItemVM),
        tap((item) => {
          this.memoryService.update(item);
        })
      );
  }
}
