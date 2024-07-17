import { TestBed } from '@angular/core/testing';

import { SaleMemoryService } from './sales-memory.service';

describe('SaleMemoryService', () => {
  let service: SaleMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
