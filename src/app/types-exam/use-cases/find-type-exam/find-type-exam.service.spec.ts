import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FindTypeExamService } from './find-type-exam.service';

describe('FindTypeExamService', () => {
  let service: FindTypeExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FindTypeExamService,
      ]
    });
    service = TestBed.inject(FindTypeExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
