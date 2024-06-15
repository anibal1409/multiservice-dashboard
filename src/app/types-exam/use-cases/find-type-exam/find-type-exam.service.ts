import { Injectable } from '@angular/core';

import { TypesExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { typeExam2TypeExamVM } from '../../mapper';
import { TypeExamItemVM } from '../../model';

@Injectable()
export class FindTypeExamService implements UseCase<TypeExamItemVM | null, BaseQuery>
{
  constructor(private httpService: TypesExamsService) { }

  exec(data: BaseQuery): Observable<TypeExamItemVM | null> {
    return this.httpService
      .typesExamsControllerFindOne(data?.id || 0)
      .pipe(map(typeExam2TypeExamVM));
  }
}
