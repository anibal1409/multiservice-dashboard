import { CustomerVM } from '../models/customer-vm';

export function customerToCustomerVM(customer: any): CustomerVM { 
  return { 
    id: customer.id, 
    name: customer.name, 
    type: customer.type, 
    idDocument: customer.idDocument, 
    phone: customer.phone, 
    email: customer.email,
    status: customer.status,
    
  }; 
}
