import { CustomerItemVM } from '../../customers/models';
import { ProductVM } from '../../products';

export interface SaleVM {
  id?: number;
  stage: string;
  date: string;
  note?: string;
  total: number;
  customerId: number;
  saleProducts: Array<SaleProduct>;
  status: boolean;
  customer?: CustomerItemVM;
}

export interface SaleProduct {
  id: number;
  productId: number;
  price: number;
  amount: number;
  subtotal: number;
  product?: ProductVM;
}

