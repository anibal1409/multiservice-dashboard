import { Injectable } from '@angular/core';

import { CustomersService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { PatientMemoryService } from '../../memory';

@Injectable()
export class DeletePatientService
implements UseCase<number, number> {
  constructor(
    private entityServices: CustomersService,
    private memoryService: PatientMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.customersControllerRemove(id.toString()).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
