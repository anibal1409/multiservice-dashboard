import { Injectable } from '@angular/core';

import { UsersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { User2UserItemVM } from '../../mappers';
import { UserMemoryService } from '../../memory';
import { UserItemVM } from '../../model/user-item-vm';
import { UserVM } from '../../model/users-vm';

@Injectable()
export class CreateUserService
  implements UseCase<UserItemVM, UserVM>
{
  constructor(
    private entityServices: UsersService,
    private memoryService: UserMemoryService,
  ) { }

  exec(entitySave: UserVM): Observable<UserItemVM> {
    return this.entityServices
      .usersControllerCreate({
        birthdate: entitySave.birthdate,
        email: entitySave.email,
        firstName: entitySave.firstName,
        lastName: entitySave.lastName,
        idDocument: entitySave.idDocument,
        role: entitySave.role,
        status: entitySave.status,
      }
      )
      .pipe(
        map(User2UserItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
