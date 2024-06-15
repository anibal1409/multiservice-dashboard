import { TypeExamVM } from '../model';

export function typeExam2TypeExamVM(typeExam: any): TypeExamVM {
  return {
    name: typeExam.name,
    description: typeExam.description,
    id: typeExam.id,
    status: typeExam.status,
  };
}