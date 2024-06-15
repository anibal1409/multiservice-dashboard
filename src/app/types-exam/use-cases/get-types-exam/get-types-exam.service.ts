import { Injectable } from '@angular/core';

import { TypesExamsService } from 'dashboard-sdk';
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
import { TypeExamItemVM } from '../../model';

@Injectable()
export class GetTypesExamService implements UseCase<Array<TypeExamItemVM> | null, BaseQuery> {

  constructor(
    private httpService: TypesExamsService,
    private memoryService: TypesExamMemoryService,
  ) {}

  exec(): Observable<Array<TypeExamItemVM>> {
    return this.httpService.typesExamsControllerFindAll()
    .pipe(
      map((items: any) => items.map(typeExam2typeExamtemVM)),
      tap((items) => {
        this.memoryService.setDataSource(items);
      })
    );
  }
}