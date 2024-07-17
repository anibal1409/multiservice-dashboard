import { RowOptionVM } from '../../common';
import { CategoryM } from './category-vm';
import { RowActionCategory } from './row-action';

export interface CategoryItemVM extends CategoryM {
  statusText?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionCategory>>;
  };
}
