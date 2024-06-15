import { Injectable } from '@angular/core';

import { AuthService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UserStateService } from '../../common';
import { UserStateVM } from '../../common/user-state/models';
import { USER_ROLES_VALUE } from '../../users';

@Injectable()
export class LoginService {

  constructor(
    private authService: AuthService,
    private userStateService: UserStateService,
  ) { }

  exec(email: string, password: string): Observable<any> {
    return this.authService.authControllerLogin({
      email,
      password,
    })
    .pipe(
      map((response: any) => {
        return {
          id: response.id,
          email: response.email,
          name: response.name,
          role: response.role,
          loginStamp: response.loginStamp,
          firstName: response.firstName,
          lastName: response.lastName,
          idDocument: response.idDocument,
          roleText: USER_ROLES_VALUE[response.role]?.name
        };
      }),
      tap((user: UserStateVM) => {
        this.userStateService.setUser(user);
      })
    );
  }
}
