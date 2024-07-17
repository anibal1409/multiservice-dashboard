import { customerToCustomerItemVM } from '../../customers/mappers';
import { SaleVM } from '../models';

export function sale2SaleVM(sale: any): SaleVM {
  const customer = customerToCustomerItemVM(sale?.customer);
  return {
    date: sale.date,
    customer: customer,
    customerId: sale.customer?.id,
    stage: sale.stage,
    status: sale.status,
    total: sale.total,
    id: sale.id,
    note: sale.note,
    saleProducts: sale.saleProducts || [],
  };
}
