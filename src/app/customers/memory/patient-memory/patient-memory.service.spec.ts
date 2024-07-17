import { TestBed } from '@angular/core/testing';

import { PatientMemoryService } from './patient-memory.service';

describe('PatientMemoryService', () => {
  let service: PatientMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
