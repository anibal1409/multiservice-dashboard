import { Injectable } from '@angular/core';

import { ExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common';
import { examToExamItemVM } from '../../mappers';
import { ExamMemoryService } from '../../memory';
import {
  ExamItemVM,
  ExamVM,
} from '../../models';

@Injectable()
export class CreateExamService implements UseCase<ExamItemVM | null, ExamVM> {

  constructor(
    private httpService: ExamsService,
    private memoryService: ExamMemoryService,
  ) { }

  exec(data: ExamVM): Observable<ExamItemVM> {
    return this.httpService.examsControllerCreate(data)
      .pipe(
        map(examToExamItemVM),
        tap((item) => this.memoryService.create(item)),
      );
  }
}