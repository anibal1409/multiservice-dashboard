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
import {
  UserItemVM,
  UserVM,
} from '../../model';

@Injectable()
export class UpdateUserService
  implements UseCase<UserItemVM | null, UserVM>
{
  constructor(
    private entityServices: UsersService,
    private memoryService: UserMemoryService,
  ) { }

  exec(entitySave: UserVM): Observable<UserItemVM | null> {
    return this.entityServices
      .usersControllerUpdate(
        entitySave.id || 0,
        {
          birthdate: entitySave.birthdate,
          email: entitySave.email,
          firstName: entitySave.firstName,
          lastName: entitySave.lastName,
          idDocument: entitySave.idDocument,
          role: entitySave.role,
          status: entitySave.status,
          patient: {id: entitySave.patientId},
        }
        )
      .pipe(
        map(User2UserItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
}
