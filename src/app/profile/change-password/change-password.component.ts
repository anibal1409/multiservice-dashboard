import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';

import { ProductVM } from '../../products';
import {
  USER_ROLES,
  UserRole,
  UserVM,
} from '../../users';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  implements OnInit, OnDestroy {
  id!: number;
  @Output()
  closed = new EventEmitter();

  showPassword1 = false;
  hide = true;

  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  submitDisabled = true;

  oldFormValue: UserVM = {
    email: '',
    idDocument: '',
    status: true,
    id: 0,
    role: null as any,
    birthdate: '',
    firstName: '',
    lastName: '',
  };

  roles = USER_ROLES;
  role!: UserRole;
  UserRole = UserRole;

  constructor(
    private entityService: ProfileService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProductVM,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.entityService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadData();
  }

  loadData(): void {
    this.sub$.add(
      this.entityService.getProfile$().subscribe((entity) => {
        if (entity) {
          this.oldFormValue = {
            ...entity,
          };
          this.form.patchValue(
            {
              ...this.oldFormValue,
            },
            {
              emitEvent: false,
            }
          );
        }
      })
    );
  }

  clickClosed(): void {
    this.closed.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      currentPassword: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      newPassword: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
      })
    );
  }

  clickSave(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.entityService
          .changePassword$({
            ...this.form.getRawValue(),
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

}
