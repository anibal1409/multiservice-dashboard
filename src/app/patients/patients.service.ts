import { Injectable } from '@angular/core';

import {
  BaseQuery,
  ListComponentService,
} from '../common/memory-repository';
import { PatientMemoryService } from './memory';
import { PatientItemVM } from './models/patient-item-vm';
import {
  CreatePatientService,
  DeletePatientService,
  FindPatientService,
  GetPatientsService,
  UpdatePatientService,
} from './use-cases';

@Injectable()
export class PatientsService extends ListComponentService<PatientItemVM, BaseQuery> {
  constructor(
    public getEntityService: GetPatientsService,
    public memoryEntityService: PatientMemoryService,
    public createEntityService: CreatePatientService,
    public deleteEntityService: DeletePatientService,
    public findEntityService: FindPatientService,
    public updateEntityService: UpdatePatientService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }
}
