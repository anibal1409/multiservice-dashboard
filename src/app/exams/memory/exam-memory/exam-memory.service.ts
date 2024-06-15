import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { ExamItemVM } from '../../models';

@Injectable()
export class ExamMemoryService extends MemoryRepository<ExamItemVM> {
  constructor() {
    super();
  }
}
