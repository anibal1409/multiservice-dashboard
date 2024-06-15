import { Injectable } from '@angular/core';

import { PatientsService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { patientToPatientVM } from '../../mappers/patient-2-patient-vm';
import { PatientItemVM } from '../../models/patient-item-vm';

@Injectable()
export class FindPatientService
  implements UseCase<PatientItemVM | null, BaseQuery>
{
  constructor(private entityServices: PatientsService) { }

  exec(data: BaseQuery): Observable<PatientItemVM> {
    return this.entityServices
      .patientsControllerFindOne(data?.id?.toString() || '0')
      .pipe(map(patientToPatientVM));
  }
}
