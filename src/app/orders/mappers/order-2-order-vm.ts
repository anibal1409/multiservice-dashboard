import { OrderVM } from '../models';

export function order2OrderVM(order: any): OrderVM {
  return {
    date: order.date,
    stage: order.stage,
    status: order.status,
    total: order.total,
    id: order.id,
    note: order.note,
    orderProducts: order.orderProducts || [],
    provider: order.provider,
    deadline: order.deadline,
  };
}
