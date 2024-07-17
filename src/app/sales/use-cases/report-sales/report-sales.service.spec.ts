import { TestBed } from '@angular/core/testing';

import { ReportSalesService } from './report-sales.service';

describe('ReportSalesService', () => {
  let service: ReportSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
