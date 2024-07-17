import { Injectable } from '@angular/core';

import { CategoriesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { typeExam2typeExamtemVM } from '../../mapper';
import { TypesExamMemoryService } from '../../memory/types-exam-memory';
import {
  CategoryItemVM,
  CategoryM,
} from '../../model';

@Injectable()
export class CreateTypeExamService implements UseCase<CategoryItemVM | null, CategoryM> {

  constructor(
    private httpService: CategoriesService,
    private memoryService: TypesExamMemoryService,
  ) { }

  exec(data: CategoryM): Observable<CategoryItemVM> {
    return this.httpService.categoriesControllerCreate(data)
      .pipe(
        map(typeExam2typeExamtemVM),
        tap((item) => this.memoryService.create(item)),
      );
  }
}
