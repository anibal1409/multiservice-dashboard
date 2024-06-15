import { TestBed } from '@angular/core/testing';

import { TypesExamMemoryService } from './types-exam-memory.service';

describe('TypesExamMemoryService', () => {
  let service: TypesExamMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TypesExamMemoryService,
      ]
    });
    service = TestBed.inject(TypesExamMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
