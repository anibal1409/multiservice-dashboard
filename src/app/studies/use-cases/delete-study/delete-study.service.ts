import { Injectable } from '@angular/core';

import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { StudiesService } from '../../../../../dist/dashboard-sdk';
import { UseCase } from '../../../common/memory-repository';
import { StudyMemoryService } from '../../memory/study-memory';

@Injectable()
export class DeleteStudyService
implements UseCase<number, number> {
  constructor(
    private entityServices: StudiesService,
    private memoryService: StudyMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.studiesControllerRemove(id.toString()).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
