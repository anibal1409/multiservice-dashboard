import { TestBed } from '@angular/core/testing';

import { FindExamService } from './find-exam.service';

describe('FindExamService', () => {
  let service: FindExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
