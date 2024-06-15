import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  pipe,
} from 'rxjs';

import { statistics2StatisticsVM } from '../../mappers';
import { StatisticsCountersVM } from '../../models';

@Injectable()
export class GetStatisticsService {

  constructor(
    private httpService: StatisticsService,
  ) { }

  exec(): Observable<StatisticsCountersVM> {
    return this.httpService.statisticsControllerCounters()
    pipe(
      map(statistics2StatisticsVM)
    );
  }
}
