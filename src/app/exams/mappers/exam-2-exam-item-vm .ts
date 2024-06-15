import { ExamItemVM } from '../models/exam-item-vm ';
import { ExamVM } from '../models/exam-vm';
import { examToExamVM } from './exam-2-exam-vm';

export function examToExamItemVM(exam: any): ExamItemVM { 
  const examVM: ExamVM = examToExamVM(exam); 
  return { 
    ...examVM, 
    statusText: exam?.status ? 'Activo' : 'Inactivo',
  }; 
}