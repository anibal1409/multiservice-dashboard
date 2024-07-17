import { TestBed } from '@angular/core/testing';

import { ServiceMemoryService } from './service-memory.service';

describe('ServiceMemoryService', () => {
  let service: ServiceMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
