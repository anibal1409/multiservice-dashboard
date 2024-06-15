import { RowOptionVM } from '../../common';
import { ExamVM } from './exam-vm';
import { RowActionExam } from './row-action';

export interface ExamItemVM extends ExamVM { 
  statusText?: string;
  options?: { 
    options?: Array<RowOptionVM<RowActionExam>>; 
  }; 
} 