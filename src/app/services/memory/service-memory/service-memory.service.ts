import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { ServiceItemVM } from '../../models';

@Injectable()
export class ServiceMemoryService extends MemoryRepository<ServiceItemVM> {
  constructor() {
    super();
  }
}
