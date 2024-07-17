import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { OrderItemVM } from '../../models';

@Injectable()
export class OrderMemoryService extends MemoryRepository<OrderItemVM> {
  constructor() {
    super();
  }
}
