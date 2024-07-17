import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TypesExamMemoryService } from '../../memory';
import { CreateTypeExamService } from './create-type-exam.service';

describe('CreateTypeExamService', () => {
  let service: CreateTypeExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TypesExamMemoryService,
        CreateTypeExamService,
      ]
    });
    service = TestBed.inject(CreateTypeExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
