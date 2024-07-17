import { CustomerVM } from '../models/customer-vm';

export function customerToCustomerVM(customer: any): CustomerVM { 
  return { 
    id: customer.id, 
    firstName: customer.firstName, 
    lastName: customer.lastName, 
    idDocument: customer.idDocument, 
    phone: customer.phone, 
    gender: customer.gender,
    status: customer.status,
    
  }; 
}
