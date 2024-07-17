import {
  Component,
  EventEmitter,
  Inject,
  Input,
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

import {
  USER_ROLES,
  UserRole,
  UserVM,
} from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
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

  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  roles = USER_ROLES.filter((u) => ![UserRole.Super].includes(u.value)).sort((a, b) => a.name.localeCompare(b.name));
  showSelects = false;
  showSchools = false;
  role!: UserRole;
  UserRole = UserRole;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UserVM,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadData();
  }

  loadData(): void {
    if (this.data?.id) {
      this.id = this.data?.id;
      this.sub$.add(
        this.usersService
          .find$({ id: this.id })
          .subscribe((entity) => {
            if (entity) {
              this.oldFormValue = entity;
              this.form.patchValue(
                {
                  ...entity,
                },
                {
                  emitEvent: false,
                }
              );
            }
          })
      );
    }
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
      email: [null, [Validators.required, Validators.email]],
      role: [null, [Validators.required]],
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
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  private create(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.usersService
          .create({
            ...this.form.value,
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

  private update(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.usersService
          .update({
            ...this.form.value,
            id: this.id,
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
