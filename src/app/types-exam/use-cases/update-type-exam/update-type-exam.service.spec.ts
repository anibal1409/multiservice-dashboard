import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TypesExamMemoryService } from '../../memory';
import { UpdateTypeExamService } from './update-type-exam.service';

describe('UpdateTypeExamService', () => {
  let service: UpdateTypeExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TypesExamMemoryService,
        UpdateTypeExamService,
      ]
    });
    service = TestBed.inject(UpdateTypeExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
