import { Injectable } from '@angular/core';

import { CategoriesService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { typeExam2TypeExamVM } from '../../mapper';
import { CategoryItemVM } from '../../model';

@Injectable()
export class FindTypeExamService implements UseCase<CategoryItemVM | null, BaseQuery>
{
  constructor(
    private httpService: CategoriesService
  ) { }

  exec(data: BaseQuery): Observable<CategoryItemVM | null> {
    return this.httpService
      .categoriesControllerFindOne(data?.id || 0)
      .pipe(map(typeExam2TypeExamVM));
  }
}
