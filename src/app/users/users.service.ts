import { Injectable } from '@angular/core';

import {
  BaseQuery,
  ListComponentService,
} from '../common/memory-repository';
import { UserMemoryService } from './memory';
import { UserItemVM } from './model';
import {
  CreateUserService,
  DeleteUserService,
  FindUserService,
  UpdateUserService,
} from './use-cases';
import { GetUsersService } from './use-cases/get-users/get-users.service';

@Injectable()
export class UsersService extends ListComponentService<UserItemVM, BaseQuery> {
  constructor(
    public getEntityService: GetUsersService,
    public memoryEntityService: UserMemoryService,
    public createEntityService: CreateUserService,
    public deleteEntityService: DeleteUserService,
    public findEntityService: FindUserService,
    public updateEntityService: UpdateUserService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }
}
