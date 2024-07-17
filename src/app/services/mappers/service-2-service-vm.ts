import { ServiceVM } from '../models/service-vm';

export function serviceToServiceVM(service: any): ServiceVM { 
  return { 
    id: service.id, 
    name: service.name, 
    description: service.description, 
    price: service.price,
    category: service.category || undefined, 
    status: service.status,
  }; 
} 