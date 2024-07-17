import { IdCreidateEntity } from '../../common/memory-repository';

export interface ProductVM { 
  id?: number; 
  name: string; 
  description?: string; 
  price: number; 
  stock: number;
  status: boolean;
  category: IdCreidateEntity;
}
 