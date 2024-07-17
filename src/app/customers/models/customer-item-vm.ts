import { RowOptionVM } from '../../common';
import { CustomerVM } from './customer-vm';
import { RowActionCustomer } from './row-action';

export interface CustomerItemVM extends CustomerVM { 
  statusText?: string; 
  name?: string;
  age?: number;
  options?: { 
    options?: Array<RowOptionVM<RowActionCustomer>>; 
  }; 
} 