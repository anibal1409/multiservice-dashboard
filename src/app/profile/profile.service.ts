import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  BehaviorSubject,
  finalize,
  Observable,
} from 'rxjs';

import { UserItemVM } from '../users/model';
import { ChangePasswordComponent } from './change-password';
import { ProfileComponent } from './profile.component';
import {
  ChangePasswordService,
  GetProfileService,
  UpdateProfileService,
} from './use-cases';

@Injectable()
export class ProfileService {
  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    public matDialog: MatDialog,
    private changePasswordService: ChangePasswordService,
    private getProfileService: GetProfileService,
    private updateProfileService: UpdateProfileService,
  ) { }

  getLoading$(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  setLoading(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }

  showProfileModal(): void {
    const modal = this.matDialog.open(ProfileComponent, {
      hasBackdrop: true,
      disableClose: true,
    });
    modal.componentInstance.closed.subscribe(() => {
      modal.close();
    });
  }

  showChangePasswordModal(): void {
    const modal = this.matDialog.open(ChangePasswordComponent, {
      hasBackdrop: true,
      disableClose: true,
    });
    modal.componentInstance.closed.subscribe(() => {
      modal.close();
    });
  }

  getProfile$(): Observable<UserItemVM | null> {
    this.setLoading(true);
    return this.getProfileService.exec({})
      .pipe(
        finalize(() => this.setLoading(false)),
      );
  }

  updateProfile$(data: any): Observable<UserItemVM | null> {
    this.setLoading(true);
    return this.updateProfileService.exec(data)
      .pipe(
        finalize(() => this.setLoading(false)),
      );
  }  

  changePassword$(data: any): Observable<boolean> {
    this.setLoading(true);
    return this.changePasswordService.exec(data)
      .pipe(
        finalize(() => this.setLoading(false)),
      );
  }
}
