import { TestBed } from '@angular/core/testing';

import { DeleteStudyService } from './delete-study.service';

describe('DeleteStudyService', () => {
  let service: DeleteStudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteStudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
