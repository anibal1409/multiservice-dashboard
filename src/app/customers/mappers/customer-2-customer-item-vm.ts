import { CustomerItemVM } from '../models/customer-item-vm';
import { CustomerVM } from '../models/customer-vm';
import { customerToCustomerVM } from './customer-2-customer-vm';

export function customerToCustomerItemVM(customer: any): CustomerItemVM { 
  const customerVM: CustomerVM = customerToCustomerVM(customer); 
  return { 
    ...customerVM, 
    statusText: customer?.status ? 'Activo' : 'Inactivo',
    name: `${customer?.firstName} ${customer?.lastName}`,
    age: 0,
  }; 
}
