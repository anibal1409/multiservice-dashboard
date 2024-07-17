import { Injectable } from '@angular/core';

import { CustomersService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common';
import { customerToCustomerItemVM } from '../../mappers';
import { CustomerItemVM } from '../../models';

@Injectable()
export class FindPatientByDocumentService
  implements UseCase<CustomerItemVM | null, string>
{
  constructor(private entityServices: CustomersService) { }

  exec(document: string): Observable<CustomerItemVM> {
    return this.entityServices.customersControllerFindOneByDocument(document)
      .pipe(map(customerToCustomerItemVM));
  }
}
