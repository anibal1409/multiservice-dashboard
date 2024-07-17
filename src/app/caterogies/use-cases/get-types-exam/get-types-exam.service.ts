import { Injectable } from '@angular/core';

import { CategoriesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { typeExam2typeExamtemVM } from '../../mapper';
import { TypesExamMemoryService } from '../../memory';
import { CategoryItemVM } from '../../model';

@Injectable()
export class GetTypesExamService implements UseCase<Array<CategoryItemVM> | null, BaseQuery> {

  constructor(
    private httpService: CategoriesService,
    private memoryService: TypesExamMemoryService,
  ) {}

  exec(): Observable<Array<CategoryItemVM>> {
    return this.httpService.categoriesControllerFindAll()
    .pipe(
      map((items: any) => items.map(typeExam2typeExamtemVM)),
      tap((items) => {
        this.memoryService.setDataSource(items);
      })
    );
  }
}