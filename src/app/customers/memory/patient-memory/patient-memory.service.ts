import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { CustomerItemVM } from '../../models/customer-item-vm';

@Injectable()
export class PatientMemoryService extends MemoryRepository<CustomerItemVM> {
  constructor() {
    super();
  }
}
