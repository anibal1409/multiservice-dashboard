import * as moment from 'moment';

import { PatientItemVM } from '../models/patient-item-vm';
import { PatientVM } from '../models/patient-vm';
import { patientToPatientVM } from './patient-2-patient-vm';

export function patientToPatientItemVM(patient: any): PatientItemVM { 
  const patientVM: PatientVM = patientToPatientVM(patient); 
  const birthDate = moment(patientVM.birthdate);
  const now = moment();
  return { 
    ...patientVM, 
    statusText: patient?.status ? 'Activo' : 'Inactivo',
    name: `${patient?.firstName} ${patient?.lastName}`,
    age: now.diff(birthDate, 'years'),
  }; 
}
