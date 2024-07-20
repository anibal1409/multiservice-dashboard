import { ProductVM } from '../../products';
import { StageOrder } from './stage';

export interface OrderVM {
  id?: number;
  stage: StageOrder;
  date: string;
  deadline?: string;
  note?: string;
  total: number;
  provider: string;
  orderProducts: Array<OrderProduct>;
  status: boolean;
}

export interface OrderProduct {
  id: number;
  productId: number;
  price: number;
  amount: number;
  subtotal: number;
  product?: ProductVM;
}

