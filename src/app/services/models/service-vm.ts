import { IdCreidateEntity } from '../../common/memory-repository';

export interface ServiceVM { 
  id?: number; 
  name: string; 
  description?: string; 
  price: number; 
  status: boolean;
  category: IdCreidateEntity;
}
 