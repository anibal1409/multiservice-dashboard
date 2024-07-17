import { Injectable } from '@angular/core';

import { SaleService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { sale2SaleItemVM } from '../../mappers';
import { SaleMemoryService } from '../../memory/sales-memory';
import {
  SaleBaseQuery,
  SaleItemVM,
} from '../../models';

@Injectable()
export class GetStudiesService
  implements UseCase<Array<SaleItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: SaleService,
    private memoryService: SaleMemoryService,
  ) { }

  exec(data: SaleBaseQuery = {}): Observable<Array<SaleItemVM>> {
    return this.entityServices.salesControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(sale2SaleItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}