import { customerToCustomerItemVM } from '../../customers';
import {
  SALE_EDIT,
  SALE_NOT_EDIT,
  SaleItemVM,
  SaleProduct,
  SaleService,
  SaleVM,
} from '../models';
import {
  STAGE_STUDY_VALUE,
  STAGES_ACTIVES,
} from '../models/stage';
import { sale2SaleVM } from './sale-2-sale-vm';

export function sale2SaleItemVM(sale: any): SaleItemVM {
  const saleVM: SaleVM = sale2SaleVM(sale);
  const customer = customerToCustomerItemVM(sale?.customer);
  return { 
    ...saleVM,
    customer: customer,
    customerName: customer?.name,
    counterProducts: saleVM?.saleProducts?.reduce((accumulator: number, currentValue: SaleProduct) => accumulator + +currentValue.amount, 0,) || 0,
    counterServices: saleVM?.saleServices?.reduce((accumulator: number, currentValue: SaleService) => accumulator + +currentValue.amount, 0,) || 0,
    stageText: STAGE_STUDY_VALUE[sale?.stage]?.name,
    statusText: sale?.status ? 'Activo' : 'Inactivo',
    options: { 
      options: STAGES_ACTIVES.includes(sale?.stage) ? SALE_EDIT : SALE_NOT_EDIT ,
    }
  }; 
}
