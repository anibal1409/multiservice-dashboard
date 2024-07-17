import { ProductVM } from '../../products';

export interface OrderVM {
  id?: number;
  stage: string;
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

