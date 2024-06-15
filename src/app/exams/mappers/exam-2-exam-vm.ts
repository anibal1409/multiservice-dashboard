import { ExamVM } from '../models/exam-vm';

export function examToExamVM(exam: any): ExamVM { 
  return { 
    id: exam.id, 
    name: exam.name, 
    description: exam.description, 
    price: exam.price, 
    unitedCheck: exam.unitedCheck, 
    united: exam.united, 
    valuesCheck: exam.valuesCheck, 
    values: exam.values, 
    typesExam: exam.typesExam || undefined, 
    status: exam.status,
    studyExams: exam.studyExams // Puedes ajustar según la estructura de StudyExams 
  }; 
} 