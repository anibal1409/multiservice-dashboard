export interface MonthStatistics {
  categories: Array<CharVM>;
  products: Array<CharVM>;
}

export interface GenderMonth {
  male: number;
  female: number;
}

export interface ProductStatistic {
  name: string;
  count: number;
}

export interface CharVM {
  name: string;
  value: number,
  extra: {
    code: string;
  };
}