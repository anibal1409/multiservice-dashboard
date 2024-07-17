import { ServiceItemVM } from '../models/service-item-vm ';
import { ServiceVM } from '../models/service-vm';
import { serviceToServiceVM } from './service-2-service-vm';

export function serviceToServiceItemVM(service: any): ServiceItemVM { 
  const serviceVM: ServiceVM = serviceToServiceVM(service); 
  return { 
    ...serviceVM, 
    statusText: service?.status ? 'Activo' : 'Inactivo',
  }; 
}