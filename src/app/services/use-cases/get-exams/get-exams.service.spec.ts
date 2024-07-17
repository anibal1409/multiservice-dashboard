import { TestBed } from '@angular/core/testing';

import { GetServicesService } from './get-exams.service';

describe('GetExamsService', () => {
  let service: GetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
