import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TypesExamMemoryService } from '../../memory';
import { DeleteTypeExamService } from './delete-type-exam.service';

describe('DeleteTypeExamService', () => {
  let service: DeleteTypeExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TypesExamMemoryService,
        DeleteTypeExamService,
      ]
    });
    service = TestBed.inject(DeleteTypeExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
