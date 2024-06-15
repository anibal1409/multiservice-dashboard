import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TypesExamMemoryService } from './memory';
import { TypesExamService } from './types-exam.service';
import {
  CreateTypeExamService,
  DeleteTypeExamService,
  FindTypeExamService,
  GetTypesExamService,
  UpdateTypeExamService,
} from './use-cases';

describe('TypesExamService', () => {
  let service: TypesExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TypesExamService,
        TypesExamMemoryService,
        CreateTypeExamService,
        DeleteTypeExamService,
        FindTypeExamService,
        UpdateTypeExamService,
        GetTypesExamService,
      ],
    });
    service = TestBed.inject(TypesExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
