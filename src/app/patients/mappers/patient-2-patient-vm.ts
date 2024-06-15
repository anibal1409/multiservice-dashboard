import { PatientVM } from '../models/patient-vm';

export function patientToPatientVM(patient: any): PatientVM { 
  return { 
    id: patient.id, 
    firstName: patient.firstName, 
    lastName: patient.lastName, 
    email: patient.email, 
    idDocument: patient.idDocument, 
    birthdate: patient.birthdate, 
    phone: patient.phone, 
    gender: patient.gender,
    status: patient.status,
    
  }; 
}
