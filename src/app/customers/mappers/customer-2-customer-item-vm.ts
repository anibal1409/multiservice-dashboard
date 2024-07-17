import { CUSTOMER_TYPE_VALUE } from '../models';
import { CustomerItemVM } from '../models/customer-item-vm';
import { CustomerVM } from '../models/customer-vm';
import { customerToCustomerVM } from './customer-2-customer-vm';

export function customerToCustomerItemVM(customer: any): CustomerItemVM { 
  const customerVM: CustomerVM = customerToCustomerVM(customer); 
  return { 
    ...customerVM, 
    typeText: CUSTOMER_TYPE_VALUE[customer?.type].abbr || '',
    statusText: customer?.status ? 'Activo' : 'Inactivo',
  }; 
}
