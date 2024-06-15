import { TestBed } from '@angular/core/testing';

import { GetStatisticsService } from './get-statistics.service';

describe('GetStatisticsService', () => {
  let service: GetStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
