import { Injectable } from '@angular/core';

import { ExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { ExamMemoryService } from '../../memory';

@Injectable()
export class DeleteExamService implements UseCase<number, number> {
  constructor(
    private httpService: ExamsService,
    private memoryService: ExamMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.httpService.examsControllerRemove(id.toString()).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
