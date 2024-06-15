import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { month2MonthStaticti } from '../../mappers';
import {
  GetMonthStatistics,
  MonthStatistics,
} from '../../models';

@Injectable()
export class GetMonthStatisticsService {

  constructor(
    private httpService: StatisticsService,
  ) { }

  exec(data: GetMonthStatistics): Observable<MonthStatistics> {
    return this.httpService.statisticsControllerMonth(
      data.start,
      data.end,
    )
      .pipe(
        map(month2MonthStaticti)
      );
  }
}
