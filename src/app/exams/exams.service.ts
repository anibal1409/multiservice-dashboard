import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../common';
import { TypeExamItemVM } from '../types-exam';
import { GetTypesExamService } from '../types-exam/use-cases/get-types-exam';
import { ExamMemoryService } from './memory';
import { ExamItemVM } from './models';
import {
  CreateExamService,
  DeleteExamService,
  FindExamService,
  GetExamsService,
  UpdateExamService,
} from './use-cases';

@Injectable()
export class ExamsService extends ListComponentService<ExamItemVM> {
  constructor(
    public getEntityService: GetExamsService,
    public entityMemoryService: ExamMemoryService,
    public createEntityService: CreateExamService,
    public deleteEntityService: DeleteExamService,
    public findEntityService: FindExamService,
    public updateEntityService: UpdateExamService,
    private getTypesExamService: GetTypesExamService,
  ) {
    super(
      getEntityService,
      entityMemoryService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }

  getTypesExam$(): Observable<Array<TypeExamItemVM>> {
    return this.getTypesExamService.exec();
  }
}
