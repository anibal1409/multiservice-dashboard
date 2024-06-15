import { TestBed } from '@angular/core/testing';

import { StudyMemoryService } from './study-memory.service';

describe('StudyMemoryService', () => {
  let service: StudyMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
