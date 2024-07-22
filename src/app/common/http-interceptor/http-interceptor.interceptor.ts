import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  Observable,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserStateService } from '../user-state';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private userStateService: UserStateService,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        this.exec(error);
        return throwError(() => error);
      })
    );
  }

  private exec(event: any): void {
    if (event?.status == 401 && event?.statusText === 'Unauthorized') {
      this.userStateService.clear();
      this.router.navigate(['/auth']);
    }
  }
}
