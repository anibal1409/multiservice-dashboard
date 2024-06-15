import { TestBed } from '@angular/core/testing';

import { FindPatientByDocumentService } from './find-patient-by-document.service';

describe('FindPatientByDocumentService', () => {
  let service: FindPatientByDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPatientByDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
