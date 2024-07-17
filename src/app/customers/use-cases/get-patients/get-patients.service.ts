import { Injectable } from '@angular/core';

import { CustomersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import {
  customerToCustomerItemVM,
} from '../../mappers/customer-2-customer-item-vm';
import { PatientMemoryService } from '../../memory';
import { CustomerItemVM } from '../../models/customer-item-vm';

@Injectable()
export class GetPatientsService
  implements UseCase<Array<CustomerItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: CustomersService,
    private memoryService: PatientMemoryService,
  ) { }

  exec(data: BaseQuery = {}): Observable<Array<CustomerItemVM>> {
    return this.entityServices.customersControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(customerToCustomerItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}
