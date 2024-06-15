import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../common/memory-repository';
import { UserItemVM } from '../../model/user-item-vm';

@Injectable()
export class UserMemoryService extends MemoryRepository<UserItemVM> {
  constructor() {
    super();
  }
}
