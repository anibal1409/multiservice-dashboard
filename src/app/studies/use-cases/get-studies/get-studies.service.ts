import { Injectable } from '@angular/core';

import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { StudiesService } from '../../../../../dist/dashboard-sdk';
import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { study2StudyItemVM } from '../../mappers';
import { StudyMemoryService } from '../../memory/study-memory';
import { StudyItemVM } from '../../models';

@Injectable()
export class GetStudiesService
  implements UseCase<Array<StudyItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: StudiesService,
    private memoryService: StudyMemoryService,
  ) { }

  exec(data: BaseQuery = {}): Observable<Array<StudyItemVM>> {
    return this.entityServices.studiesControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(study2StudyItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}