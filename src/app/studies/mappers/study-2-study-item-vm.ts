import { patientToPatientItemVM } from '../../patients';
import {
  StudyItemVM,
  StudyVM,
} from '../models';
import { STAGE_STUDY_VALUE } from '../models/stage';
import { study2StudyVM } from './study-2-study-vm';

export function study2StudyItemVM(study: any): StudyItemVM {
  const studyVM: StudyVM = study2StudyVM(study);
  const patient = patientToPatientItemVM(study?.patient);
  return { 
    ...studyVM,
    patient,
    patientName: patient?.name,
    counterExams: studyVM?.studyExams?.length || 0,
    stageText: STAGE_STUDY_VALUE[study?.stage]?.name,
    statusText: study?.status ? 'Activo' : 'Inactivo',
  }; 
}
