import {
  ORDER_EDIT,
  ORDER_NOT_EDIT,
  OrderItemVM,
  OrderProduct,
  OrderVM,
} from '../models';
import {
  STAGE_STUDY_VALUE,
  STAGES_ACTIVES,
} from '../models/stage';
import { order2OrderVM } from './order-2-order-vm';

export function order2OrderItemVM(order: any): OrderItemVM {
  const orderVM: OrderVM = order2OrderVM(order);
  return { 
    ...orderVM,
    counterProducts: orderVM?.orderProducts?.reduce((accumulator: number, currentValue: OrderProduct) => accumulator + +currentValue.amount, 0,) || 0,
    stageText: STAGE_STUDY_VALUE[order?.stage]?.name,
    statusText: order?.status ? 'Activo' : 'Inactivo',
    options: { 
      options: STAGES_ACTIVES.includes(order?.stage) ? ORDER_EDIT : ORDER_NOT_EDIT ,
    }
  }; 
}
