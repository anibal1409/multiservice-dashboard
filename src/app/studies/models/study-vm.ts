import { ExamVM } from '../../exams';
import { PatientItemVM } from '../../patients/models';

export interface StudyVM {
  id?: number;
  stage: string;
  date: string;
  note?: string;
  sendEmail: boolean;
  total: number;
  patientId: number;
  studyExams: Array<StudyExam>;
  status: boolean;
  patient?: PatientItemVM;
}

export interface StudyExam {
  id: number;
  examId: number;
  value?: string;
  exam?: ExamVM;
}

