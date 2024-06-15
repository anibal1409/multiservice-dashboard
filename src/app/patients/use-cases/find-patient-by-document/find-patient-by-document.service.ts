import { Injectable } from '@angular/core';

import { PatientsService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common';
import { patientToPatientItemVM } from '../../mappers';
import { PatientItemVM } from '../../models';

@Injectable()
export class FindPatientByDocumentService
  implements UseCase<PatientItemVM | null, string>
{
  constructor(private entityServices: PatientsService) { }

  exec(document: string): Observable<PatientItemVM> {
    return this.entityServices.patientsControllerFindOneByDocument(document)
      .pipe(map(patientToPatientItemVM));
  }
}
