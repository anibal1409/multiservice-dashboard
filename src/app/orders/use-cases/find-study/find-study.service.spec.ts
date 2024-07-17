import { TestBed } from '@angular/core/testing';

import { FindStudyService } from './find-study.service';

describe('FindStudyService', () => {
  let service: FindStudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindStudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
