import { TestBed } from '@angular/core/testing';

import { GetExamsService } from './get-exams.service';

describe('GetExamsService', () => {
  let service: GetExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
