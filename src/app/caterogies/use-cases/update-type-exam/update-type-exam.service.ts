import { Injectable } from '@angular/core';

import { CategoriesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { typeExam2typeExamtemVM } from '../../mapper';
import { TypesExamMemoryService } from '../../memory';
import {
  CategoryItemVM,
  CategoryM,
} from '../../model';

@Injectable()
export class UpdateTypeExamService implements UseCase<CategoryItemVM | null, CategoryM>
{
  constructor(
    private httpService: CategoriesService,
    private memoryService: TypesExamMemoryService,
  ) { }

  exec(data: CategoryM): Observable<CategoryItemVM | null> {
    return this.httpService
      .categoriesControllerUpdate(
        data.id || 0,
        {
          name: data.name,
          status: !!data.status,
          description: data.description,
        })
      .pipe(
        map(typeExam2typeExamtemVM),
        tap((item) => {
          this.memoryService.update(item);
        })
      );
  }
}
