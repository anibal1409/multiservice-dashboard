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

import { ProductVM } from '../products';
import {
  USER_ROLES,
  UserRole,
  UserVM,
} from '../users';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  id!: number;
  @Output()
  closed = new EventEmitter();

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
      idDocument: [null, [Validators.required]],
      birthdate: [null, [Validators.required]],
      id: [0],
      status: [true, [Validators.required]],
      email: [{ value: null, disabled: true }, [Validators.required, Validators.email]],
      role: [{ value: null, disabled: true }, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
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
          .updateProfile$({
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
