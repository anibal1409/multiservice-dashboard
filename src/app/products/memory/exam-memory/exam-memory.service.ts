import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { ProductItemVM } from '../../models';

@Injectable()
export class ExamMemoryService extends MemoryRepository<ProductItemVM> {
  constructor() {
    super();
  }
}
