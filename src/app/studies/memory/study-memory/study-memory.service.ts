import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { StudyItemVM } from '../../models';

@Injectable()
export class StudyMemoryService extends MemoryRepository<StudyItemVM> {
  constructor() {
    super();
  }
}
