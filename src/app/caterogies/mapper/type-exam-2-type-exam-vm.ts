import { CategoryM } from '../model';

export function typeExam2TypeExamVM(typeExam: any): CategoryM {
  return {
    name: typeExam.name,
    description: typeExam.description,
    id: typeExam.id,
    status: typeExam.status,
  };
}