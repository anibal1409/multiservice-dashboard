import { Injectable } from '@angular/core';

import { OrdersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { OrderMemoryService } from '../../memory/order-memory';

@Injectable()
export class DeleteStudyService
implements UseCase<number, number> {
  constructor(
    private entityServices: OrdersService,
    private memoryService: OrderMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.ordersControllerRemove(id.toString()).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
