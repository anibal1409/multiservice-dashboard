import { ProductVM } from '../models/product-vm';

export function productToProductVM(exam: any): ProductVM { 
  return { 
    id: exam.id, 
    name: exam.name, 
    description: exam.description, 
    price: exam.price,
    stock: exam.stock,
    category: exam.category || undefined, 
    status: exam.status,
  }; 
} 