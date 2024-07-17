import { CustomerItemVM } from '../../customers/models';
import { ProductVM } from '../../products';
import { ServiceVM } from '../../services';

export interface SaleVM {
  id?: number;
  stage: string;
  date: string;
  note?: string;
  total: number;
  customerId: number;
  saleProducts: Array<SaleProduct>;
  saleServices: Array<SaleService>;
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
export interface SaleService {
  id: number;
  serviceId: number;
  price: number;
  amount: number;
  subtotal: number;
  service?: ServiceVM;
}

