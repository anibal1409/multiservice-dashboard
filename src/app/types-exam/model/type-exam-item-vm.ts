import { RowOptionVM } from '../../common';
import { RowActionTypeExam } from './row-action';
import { TypeExamVM } from './type-exam-vm';

export interface TypeExamItemVM extends TypeExamVM {
  statusText?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionTypeExam>>;
  };
}
