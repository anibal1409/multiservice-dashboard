import { Injectable } from '@angular/core';

import { SaleService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { sale2SaleItemVM } from '../../mappers';
import { SaleMemoryService } from '../../memory';
import {
  SaleItemVM,
  SaleVM,
} from '../../models';

@Injectable()
export class CreateStudyService
  implements UseCase<SaleItemVM, SaleVM>
{
  constructor(
    private entityServices: SaleService,
    private memoryService: SaleMemoryService,
  ) { }

  exec(entitySave: SaleVM): Observable<SaleItemVM> {
    return this.entityServices
      .salesControllerCreate({
        date: entitySave.date,
        note: entitySave.note,
        total: +entitySave.total,
        customer: { id: entitySave.customerId },
        stage: entitySave.stage,
        saleProducts: entitySave.saleProducts.map((x) => ({
          product: { id: x.productId },
          price: +x.price,
          amount: +x.amount,
          subtotal: +x.subtotal
        })) as any,
      }
      )
      .pipe(
        map(sale2SaleItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
