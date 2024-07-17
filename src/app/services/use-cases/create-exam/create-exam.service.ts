import { Injectable } from '@angular/core';

import { ServicesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common';
import { serviceToServiceItemVM } from '../../mappers';
import { ServiceMemoryService } from '../../memory';
import {
  ServiceItemVM,
  ServiceVM,
} from '../../models';

@Injectable()
export class CreateExamService implements UseCase<ServiceItemVM | null, ServiceVM> {

  constructor(
    private httpService: ServicesService,
    private memoryService: ServiceMemoryService,
  ) { }

  exec(data: ServiceVM): Observable<ServiceItemVM> {
    return this.httpService.servicesControllerCreate(data)
      .pipe(
        map(serviceToServiceItemVM),
        tap((item) => this.memoryService.create(item)),
      );
  }
}