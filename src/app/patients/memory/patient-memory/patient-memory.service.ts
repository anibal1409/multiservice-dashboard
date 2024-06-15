import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { PatientItemVM } from '../../models/patient-item-vm';

@Injectable()
export class PatientMemoryService extends MemoryRepository<PatientItemVM> {
  constructor() {
    super();
  }
}
