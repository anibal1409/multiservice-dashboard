import { RowOptionVM } from '../../common';
import { RowActionservice } from './row-action';
import { ServiceVM } from './service-vm';

export interface ServiceItemVM extends ServiceVM { 
  statusText?: string;
  options?: { 
    options?: Array<RowOptionVM<RowActionservice>>; 
  }; 
} 