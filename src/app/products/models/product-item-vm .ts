import { RowOptionVM } from '../../common';
import { ProductVM } from './product-vm';
import { RowActionExam } from './row-action';

export interface ProductItemVM extends ProductVM { 
  statusText?: string;
  options?: { 
    options?: Array<RowOptionVM<RowActionExam>>; 
  }; 
} 