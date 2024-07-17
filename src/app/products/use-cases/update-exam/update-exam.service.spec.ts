import { TestBed } from '@angular/core/testing';

import { UpdateExamService } from './update-exam.service';

describe('UpdateExamService', () => {
  let service: UpdateExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
