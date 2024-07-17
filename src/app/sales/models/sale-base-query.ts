import { BaseQuery } from '../../common';

export interface SaleBaseQuery extends BaseQuery {
  customerName?: string;
  stage?: string;
  date?: string;
  categoryId?: number;
  customerId?: number;
  start?: string;
  end?: string;
}
