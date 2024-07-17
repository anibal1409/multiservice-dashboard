import { RowOptionVM } from '../../common/table';
import { RowActionSale } from './row-action';
import { SaleVM } from './sale-vm';

export interface SaleItemVM extends SaleVM { 
  statusText?: string;
  customerName?: string;
  counterProducts?: number;
  stageText?: string;
  options?: { 
    options?: Array<RowOptionVM<RowActionSale>>; 
  }; 
}
