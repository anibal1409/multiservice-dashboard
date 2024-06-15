import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  finalize,
  Observable,
} from 'rxjs';

import {
  GetMonthStatistics,
  MonthStatistics,
  StatisticsCountersVM,
} from './models';
import {
  GetMonthStatisticsService,
  GetStatisticsService,
} from './use-cases';

@Injectable()
export class StatisticsService {
  protected loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private getStatisticsService: GetStatisticsService,
    private getMonthStatisticsService: GetMonthStatisticsService,
  ) { }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(loading: boolean): void {
    this.loading$.next(loading);
  }

  getStatistics$(): Observable<StatisticsCountersVM> {
    this.setLoading(true);
    return this.getStatisticsService.exec()
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  getMonthStatistics$(data: GetMonthStatistics): Observable<MonthStatistics> {
    this.setLoading(true);
    return this.getMonthStatisticsService.exec(data)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }
}
