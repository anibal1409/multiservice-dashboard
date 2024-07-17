import { Injectable } from '@angular/core';

import { ProductsService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common';
import { productToProductVM } from '../../mappers';
import { ProductItemVM } from '../../models';

@Injectable()
export class FindExamService implements UseCase<ProductItemVM | null, BaseQuery>
{
  constructor(
    private httpService: ProductsService
  ) { }

  exec(data: BaseQuery): Observable<ProductItemVM | null> {
    return this.httpService
      .productsControllerFindOne(data?.id?.toString() || '0')
      .pipe(map(productToProductVM));
  }
}
