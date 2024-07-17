import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { CategoryItemVM } from '../../model';

@Injectable()
export class TypesExamMemoryService extends MemoryRepository<CategoryItemVM> {
  constructor() {
    super();
  }
}
