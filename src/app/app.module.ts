import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import es from '@angular/common/locales/es';
import {
  ErrorHandler,
  forwardRef,
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  ApiModule,
  Configuration,
} from 'dashboard-sdk';
import {
  ErrorHandlerModule,
  ErrorHandlerService,
} from 'error-handler';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';
import {
  ToastModule,
  ToastService,
} from 'toast';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpFormDataClientModule } from '../../projects/http-form-data-client';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AuthGuard,
  AuthLoginGuard,
} from './auth';
import { AuthModule } from './auth/auth.module';
import { HttpInterceptorInterceptor } from './common/http-interceptor';
import { DashboardModule } from './dashboard';

registerLocaleData(es);

function apiConfigFactory(): Configuration {
  return new Configuration({
    basePath: environment.apiBasePath,
    withCredentials: true,
  });
}

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    DashboardModule,
    ApiModule.forRoot(apiConfigFactory),
    ToastModule.forRoot(),
    ErrorHandlerModule.forRoot({
      alertService: forwardRef(() => ToastService),
      alertMethodName: 'error',
      alertClientErrors: true,
      loggerConfig: {
        allowConsole: true,
      },
    }),
    HttpFormDataClientModule.forRoot({
      basePath: environment.apiBasePath,
      httpOptions: {
        withCredentials: true,
      },
    }),
    NgbModule,
    CurrencyMaskModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    AuthGuard,
    AuthLoginGuard,
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    provideEnvironmentNgxMask(maskConfig),
    {
      provide: ErrorHandler,
      useExisting: forwardRef(() => ErrorHandlerService),
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
