import { BaseQuery } from '../../common';

export interface OrderBaseQuery extends BaseQuery {
  stage?: string;
  date?: string;
  categoryId?: number;
  start?: string;
  end?: string;
}
