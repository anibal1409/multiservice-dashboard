import { Injectable } from '@angular/core';

import { CustomersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import {
  customerToCustomerItemVM,
} from '../../mappers/customer-2-customer-item-vm';
import { PatientMemoryService } from '../../memory';
import { CustomerItemVM } from '../../models/customer-item-vm';
import { CustomerVM } from '../../models/customer-vm';

@Injectable()
export class CreatePatientService
  implements UseCase<CustomerItemVM, CustomerVM>
{
  constructor(
    private entityServices: CustomersService,
    private memoryService: PatientMemoryService,
  ) { }

  exec(entitySave: CustomerVM): Observable<CustomerItemVM> {
    return this.entityServices
      .customersControllerCreate({
        firstName: entitySave.firstName,
        lastName: entitySave.lastName,
        idDocument: entitySave.idDocument,
        status: entitySave.status,
        phone: entitySave.phone,
        gender: entitySave.gender,
      }
      )
      .pipe(
        map(customerToCustomerItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
