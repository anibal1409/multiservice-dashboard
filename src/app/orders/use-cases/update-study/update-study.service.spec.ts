import { TestBed } from '@angular/core/testing';

import { UpdateStudyService } from './update-study.service';

describe('UpdateStudyService', () => {
  let service: UpdateStudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
