import { Injectable } from '@angular/core';

import { UsersService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { ChangePassword } from '../../models';

@Injectable()
export class ChangePasswordService {
  constructor(
    private entityServices: UsersService,
  ) { }

  exec(data: ChangePassword): Observable<boolean> {
    return this.entityServices.usersControllerChangePassword(data).pipe(
      map(() => true)
    );
  }
}
