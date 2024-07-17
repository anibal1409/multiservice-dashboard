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
export class UpdatePatientService
  implements UseCase<CustomerItemVM | null, CustomerVM>
{
  constructor(
    private entityServices: CustomersService,
    private memoryService: PatientMemoryService,
  ) { }

  exec(entitySave: CustomerVM): Observable<CustomerItemVM | null> {
    return this.entityServices
      .customersControllerUpdate(
        entitySave.id?.toString() || '0',
        {
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
          this.memoryService.update(entity);
        })
      );
  }
}
