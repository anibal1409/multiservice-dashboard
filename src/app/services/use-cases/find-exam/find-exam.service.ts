import { Injectable } from '@angular/core';

import { ServicesService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common';
import { serviceToServiceVM } from '../../mappers';
import { ServiceItemVM } from '../../models';

@Injectable()
export class FindExamService implements UseCase<ServiceItemVM | null, BaseQuery>
{
  constructor(
    private httpService: ServicesService
  ) { }

  exec(data: BaseQuery): Observable<ServiceItemVM | null> {
    return this.httpService
      .servicesControllerFindOne(data?.id?.toString() || '0')
      .pipe(map(serviceToServiceVM));
  }
}
