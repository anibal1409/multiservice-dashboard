import {
  CharVM,
  MonthStatistics,
} from '../models';

export function month2MonthStaticti(month: any): MonthStatistics {
  return {
    gender: [
      {
        name: 'Femenino',
        value: month.gender.female,
        extra: {
          code: 'F'
        },
      },
      {
        name: 'Masculino',
        value: month.gender.male,
        extra: {
          code: 'M'
        },
      },
    ],
    exams: month.exams.map((exam: any) => toCharVM(exam.examName, exam.count, exam.examName.substr(0, 2))),
    typesExam: month.typesExam.map((typeExam: any) => toCharVM(typeExam.examType, typeExam.count, typeExam.examType.substr(0, 2))),
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
