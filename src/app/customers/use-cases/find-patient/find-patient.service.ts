import { Injectable } from '@angular/core';

import { CustomersService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { customerToCustomerVM } from '../../mappers/customer-2-customer-vm';
import { CustomerItemVM } from '../../models/customer-item-vm';

@Injectable()
export class FindPatientService
  implements UseCase<CustomerItemVM | null, BaseQuery>
{
  constructor(private entityServices: CustomersService) { }

  exec(data: BaseQuery): Observable<CustomerItemVM> {
    return this.entityServices
      .customersControllerFindOne(data?.id?.toString() || '0')
      .pipe(map(customerToCustomerVM));
  }
}
