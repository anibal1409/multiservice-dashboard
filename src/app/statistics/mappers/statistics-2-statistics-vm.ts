import { StatisticsCountersVM } from '../models/statistics-vm';

export function statistics2StatisticsVM(statistics: any): StatisticsCountersVM {
  return {
    exams: statistics.exams,
    patients: statistics.patients,
    studies: statistics.studies,
    users: statistics.users,
  };
}
