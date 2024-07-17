import { Injectable } from '@angular/core';

import { UsersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { UserStateService } from '../../../common/user-state';
import { User2UserItemVM } from '../../../users/mappers';
import {
  UserItemVM,
  UserVM,
} from '../../../users/model';

@Injectable()
export class UpdateProfileService
  implements UseCase<UserItemVM | null, UserVM> {
  constructor(
    private entityServices: UsersService,
    private userStateService: UserStateService,
  ) { }

  exec(entitySave: UserVM): Observable<UserItemVM | null> {
    return this.entityServices
      .usersControllerUpdateProfile(
        {
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
          const user = this.userStateService.getUser();
          if(user) {
            this.userStateService.setUser({
              ...user,
              firstName: entitySave.firstName,
              lastName: entitySave.lastName,
            });
          }
        })
      );
  }
}

