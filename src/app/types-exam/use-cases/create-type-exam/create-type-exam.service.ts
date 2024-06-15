import { Injectable } from '@angular/core';

import { TypesExamsService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { typeExam2typeExamtemVM } from '../../mapper';
import { TypesExamMemoryService } from '../../memory/types-exam-memory';
import {
  TypeExamItemVM,
  TypeExamVM,
} from '../../model';

@Injectable()
export class CreateTypeExamService implements UseCase<TypeExamItemVM | null, TypeExamVM> {

  constructor(
    private httpService: TypesExamsService,
    private memoryService: TypesExamMemoryService,
  ) { }

  exec(data: TypeExamVM): Observable<TypeExamItemVM> {
    return this.httpService.typesExamsControllerCreate(data)
      .pipe(
        map(typeExam2typeExamtemVM),
        tap((item) => this.memoryService.create(item)),
      );
  }
}
