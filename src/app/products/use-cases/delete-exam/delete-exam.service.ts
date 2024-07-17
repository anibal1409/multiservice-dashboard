import { Injectable } from '@angular/core';

import { ProductsService } from 'dashboard-sdk';
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
    private httpService: ProductsService,
    private memoryService: ExamMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.httpService.productsControllerRemove(id.toString()).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
