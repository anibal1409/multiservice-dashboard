import { ProductItemVM } from '../models/product-item-vm ';
import { ProductVM } from '../models/product-vm';
import { productToProductVM } from './exam-2-exam-vm';

export function examToExamItemVM(exam: any): ProductItemVM { 
  const examVM: ProductVM = productToProductVM(exam); 
  return { 
    ...examVM, 
    statusText: exam?.status ? 'Activo' : 'Inactivo',
  }; 
}