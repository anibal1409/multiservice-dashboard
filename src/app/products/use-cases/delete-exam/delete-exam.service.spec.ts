import { TestBed } from '@angular/core/testing';

import { DeleteExamService } from './delete-exam.service';

describe('DeleteExamService', () => {
  let service: DeleteExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
