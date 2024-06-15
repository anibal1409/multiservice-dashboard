export interface MonthStatistics {
  gender: Array<CharVM>;
  typesExam: Array<CharVM>;
  exams: Array<CharVM>;
}

export interface GenderMonth {
  male: number;
  female: number;
}

export interface ExamStatistic {
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