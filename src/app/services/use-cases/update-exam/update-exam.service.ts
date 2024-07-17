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
export class UpdateExamService implements UseCase<ServiceItemVM | null, ServiceVM>
{
  constructor(
    private httpService: ServicesService,
    private memoryService: ServiceMemoryService,
  ) { }

  exec(data: ServiceVM): Observable<ServiceItemVM | null> {
    return this.httpService
      .servicesControllerUpdate(
        data.id?.toString() || '0',
        {
          name: data.name,
          status: !!data.status,
          description: data.description,
          price: data.price,
          category: data.category,
        })
      .pipe(
        map(serviceToServiceItemVM),
        tap((item) => {
          this.memoryService.update(item);
        })
      );
  }
}
