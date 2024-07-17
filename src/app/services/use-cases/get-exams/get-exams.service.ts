import { Injectable } from '@angular/core';

import { ServicesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common';
import { serviceToServiceItemVM } from '../../mappers';
import { ServiceMemoryService } from '../../memory';
import { ServiceItemVM } from '../../models';

@Injectable()
export class GetServicesService implements UseCase<Array<ServiceItemVM> | null, BaseQuery> {

  constructor(
    private httpService: ServicesService,
    private memoryService: ServiceMemoryService,
  ) {}

  exec(): Observable<Array<ServiceItemVM>> {
    return this.httpService.servicesControllerFindAll()
    .pipe(
      map((items: any) => items.map(serviceToServiceItemVM)),
      tap((items) => {
        this.memoryService.setDataSource(items);
      })
    );
  }
}