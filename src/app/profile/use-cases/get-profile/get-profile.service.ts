import { Injectable } from '@angular/core';

import { UsersService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { User2UserVM } from '../../../users';
import { UserItemVM } from '../../../users/model';

@Injectable()
export class GetProfileService
  implements UseCase<UserItemVM | null, BaseQuery> {
  constructor(private entityServices: UsersService) { }

  exec(data: BaseQuery): Observable<UserItemVM> {
    return this.entityServices
      .usersControllerFindProfile()
      .pipe(map(User2UserVM));
  }
}
