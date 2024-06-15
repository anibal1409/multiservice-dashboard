import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { TypeExamItemVM } from '../../model';

@Injectable()
export class TypesExamMemoryService extends MemoryRepository<TypeExamItemVM> {
  constructor() {
    super();
  }
}
