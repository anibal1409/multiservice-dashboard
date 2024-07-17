import { Injectable } from '@angular/core';

import { CategoriesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { TypesExamMemoryService } from '../../memory/types-exam-memory';

@Injectable()
export class DeleteTypeExamService implements UseCase<number, number> {
  constructor(
    private httpService: CategoriesService,
    private memoryService: TypesExamMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.httpService.categoriesControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}

