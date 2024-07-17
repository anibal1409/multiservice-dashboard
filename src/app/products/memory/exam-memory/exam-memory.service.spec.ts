import { TestBed } from '@angular/core/testing';

import { ExamMemoryService } from './exam-memory.service';

describe('ExamMemoryService', () => {
  let service: ExamMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
