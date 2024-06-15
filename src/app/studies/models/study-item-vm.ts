import { RowOptionVM } from '../../common/table';
import { RowActionStudy } from './row-action';
import { StudyVM } from './study-vm';

export interface StudyItemVM extends StudyVM { 
  statusText?: string;
  patientName?: string;
  counterExams?: number;
  stageText?: string;
  options?: { 
    options?: Array<RowOptionVM<RowActionStudy>>; 
  }; 
}
