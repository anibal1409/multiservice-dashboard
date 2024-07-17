import { StatisticsCountersVM } from '../models/statistics-vm';

export function statistics2StatisticsVM(statistics: any): StatisticsCountersVM {
  return {
    products: statistics.products,
    customers: statistics.customers,
    sales: statistics.sales,
    users: statistics.users,
    orders: statistics.orders,
  };
}
