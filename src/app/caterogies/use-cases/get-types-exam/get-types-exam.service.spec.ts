import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TypesExamMemoryService } from '../../memory';
import { GetTypesExamService } from './get-types-exam.service';

describe('GetTypesExamService', () => {
  let service: GetTypesExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TypesExamMemoryService,
        GetTypesExamService,
      ]
    });
    service = TestBed.inject(GetTypesExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
