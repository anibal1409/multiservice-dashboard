import { CategoryItemVM } from '../model/category-item-vm';
import { typeExam2TypeExamVM } from './type-exam-2-type-exam-vm';

export function typeExam2typeExamtemVM(typeExam: any): CategoryItemVM {
  return {
    ...typeExam2TypeExamVM(typeExam),
    statusText: typeExam?.status ? 'Activo' : 'Inactivo',
  };
}
