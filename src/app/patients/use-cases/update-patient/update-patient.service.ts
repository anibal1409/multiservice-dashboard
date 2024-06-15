import { Injectable } from '@angular/core';

import { PatientsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import {
  patientToPatientItemVM,
} from '../../mappers/patient-2-patient-item-vm';
import { PatientMemoryService } from '../../memory';
import { PatientItemVM } from '../../models/patient-item-vm';
import { PatientVM } from '../../models/patient-vm';

@Injectable()
export class UpdatePatientService
  implements UseCase<PatientItemVM | null, PatientVM>
{
  constructor(
    private entityServices: PatientsService,
    private memoryService: PatientMemoryService,
  ) { }

  exec(entitySave: PatientVM): Observable<PatientItemVM | null> {
    return this.entityServices
      .patientsControllerUpdate(
        entitySave.id?.toString() || '0',
        {
          birthdate: entitySave.birthdate,
          email: entitySave.email,
          firstName: entitySave.firstName,
          lastName: entitySave.lastName,
          idDocument: entitySave.idDocument,
          status: entitySave.status,
          gender: entitySave.gender,
          phone: entitySave.phone,
        }
      )
      .pipe(
        map(patientToPatientItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
}
