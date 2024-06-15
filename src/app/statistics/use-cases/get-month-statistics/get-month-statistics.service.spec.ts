import { TestBed } from '@angular/core/testing';

import { GetMonthStatisticsService } from './get-month-statistics.service';

describe('GetMonthStatisticsService', () => {
  let service: GetMonthStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMonthStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
