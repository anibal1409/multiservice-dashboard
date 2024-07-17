import { TestBed } from '@angular/core/testing';

import { GetStudiesService } from './get-studies.service';

describe('GetStudiesService', () => {
  let service: GetStudiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStudiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
