import { Injectable } from '@angular/core';

import { ExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common';
import { examToExamItemVM } from '../../mappers';
import { ExamMemoryService } from '../../memory';
import { ExamItemVM } from '../../models';

@Injectable()
export class GetExamsService implements UseCase<Array<ExamItemVM> | null, BaseQuery> {

  constructor(
    private httpService: ExamsService,
    private memoryService: ExamMemoryService,
  ) {}

  exec(): Observable<Array<ExamItemVM>> {
    return this.httpService.examsControllerFindAll()
    .pipe(
      map((items: any) => items.map(examToExamItemVM)),
      tap((items) => {
        this.memoryService.setDataSource(items);
      })
    );
  }
}