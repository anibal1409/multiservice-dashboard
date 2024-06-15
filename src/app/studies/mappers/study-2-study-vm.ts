import { patientToPatientItemVM } from '../../patients/mappers';
import { StudyVM } from '../models';

export function study2StudyVM(study: any): StudyVM {
  const patient = patientToPatientItemVM(study?.patient);
  return {
    date: study.date,
    patient,
    patientId: study.patient?.id,
    sendEmail: study.sendEmail,
    stage: study.stage,
    status: study.status,
    total: study.total,
    id: study.id,
    note: study.note,
    studyExams: study.studyExams,
  };
}
