import { Injectable } from '@angular/core';

import { ServicesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { ServiceMemoryService } from '../../memory';

@Injectable()
export class DeleteExamService implements UseCase<number, number> {
  constructor(
    private httpService: ServicesService,
    private memoryService: ServiceMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.httpService.servicesControllerRemove(id.toString()).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
