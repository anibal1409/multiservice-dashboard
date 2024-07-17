import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  StateModule,
  TogglePasswordModule,
} from '../common';
import {
  ChangePasswordComponent,
} from './change-password/change-password.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import {
  ChangePasswordService,
  GetProfileService,
  UpdateProfileService,
} from './use-cases';

@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    StateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TogglePasswordModule,
  ],
  providers: [
    ProfileService,
    ChangePasswordService,
    GetProfileService,
    UpdateProfileService,
  ],
  exports: []
})
export class ProfileModule { }
