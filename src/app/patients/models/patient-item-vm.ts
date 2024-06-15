import { RowOptionVM } from '../../common';
import { PatientVM } from './patient-vm';
import { RowActionPatient } from './row-action';

export interface PatientItemVM extends PatientVM { 
  statusText?: string; 
  name?: string;
  age?: number;
  options?: { 
    options?: Array<RowOptionVM<RowActionPatient>>; 
  }; 
} 