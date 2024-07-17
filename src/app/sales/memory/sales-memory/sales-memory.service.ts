import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { SaleItemVM } from '../../models';

@Injectable()
export class SaleMemoryService extends MemoryRepository<SaleItemVM> {
  constructor() {
    super();
  }
}
