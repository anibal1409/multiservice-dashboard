import { TestBed } from '@angular/core/testing';

import { ReportSaleService } from './report-sale.service';

describe('ReportSaleService', () => {
  let service: ReportSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
