import { Injectable } from '@angular/core';

import { TypesExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { typeExam2typeExamtemVM } from '../../mapper';
import { TypesExamMemoryService } from '../../memory';
import {
  TypeExamItemVM,
  TypeExamVM,
} from '../../model';

@Injectable()
export class UpdateTypeExamService implements UseCase<TypeExamItemVM | null, TypeExamVM>
{
  constructor(
    private httpService: TypesExamsService,
    private memoryService: TypesExamMemoryService,
  ) { }

  exec(data: TypeExamVM): Observable<TypeExamItemVM | null> {
    return this.httpService
      .typesExamsControllerUpdate(
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
