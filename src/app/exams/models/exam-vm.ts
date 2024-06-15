import { IdCreidateEntity } from '../../common/memory-repository';

export interface ExamVM { 
  id?: number; 
  name: string; 
  description?: string; 
  price: number; 
  status: boolean;
  unitedCheck: boolean; 
  united?: string; 
  valuesCheck: boolean; 
  values?: string; 
  typesExam: IdCreidateEntity; 
  studyExams?: any[]; // Puedes ajustar el tipo según la estructura de StudyExams
}
 