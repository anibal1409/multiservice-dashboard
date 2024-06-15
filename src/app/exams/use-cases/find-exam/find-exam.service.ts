import { Injectable } from '@angular/core';

import { ExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common';
import { examToExamVM } from '../../mappers';
import { ExamItemVM } from '../../models';

@Injectable()
export class FindExamService implements UseCase<ExamItemVM | null, BaseQuery>
{
  constructor(private httpService: ExamsService) { }

  exec(data: BaseQuery): Observable<ExamItemVM | null> {
    return this.httpService
      .examsControllerFindOne(data?.id?.toString() || '0')
      .pipe(map(examToExamVM));
  }
}
