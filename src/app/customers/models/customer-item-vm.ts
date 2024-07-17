import { RowOptionVM } from '../../common';
import { CustomerVM } from './customer-vm';
import { RowActionCustomer } from './row-action';

export interface CustomerItemVM extends CustomerVM { 
  statusText?: string; 
  typeText?: string; 
  options?: { 
    options?: Array<RowOptionVM<RowActionCustomer>>; 
  }; 
} 