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
import { User2UserVM } from '../../mappers';
import { UserItemVM } from '../../model';

@Injectable()
export class FindUserService
  implements UseCase<UserItemVM | null, BaseQuery>
{
  constructor(private entityServices: UsersService) { }

  exec(data: BaseQuery): Observable<UserItemVM> {
    return this.entityServices
      .usersControllerFindOne(data?.id || 0)
      .pipe(map(User2UserVM));
  }
}
