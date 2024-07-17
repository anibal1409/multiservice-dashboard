import { Injectable } from '@angular/core';

import { OrdersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { order2OrderItemVM } from '../../mappers';
import { OrderMemoryService } from '../../memory/order-memory';
import {
  OrderBaseQuery,
  OrderItemVM,
} from '../../models';

@Injectable()
export class GetStudiesService
  implements UseCase<Array<OrderItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: OrdersService,
    private memoryService: OrderMemoryService,
  ) { }

  exec(data: OrderBaseQuery = {}): Observable<Array<OrderItemVM>> {
    return this.entityServices.ordersControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(order2OrderItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}