import {
  CharVM,
  MonthStatistics,
} from '../models';

export function month2MonthStaticti(month: any): MonthStatistics {
  return {
    products: month.products.map((product: any) => toCharVM(product.productName, product.count, product.productName.substr(0, 2))),
    categories: month.categories.map((category: any) => toCharVM(category.category, category.count, category.category.substr(0, 2))),
  };
}

export function toCharVM(name: string, value: number, code: string): CharVM {
  return {
    name,
    value,
    extra: {
      code,
    },
  };
}
