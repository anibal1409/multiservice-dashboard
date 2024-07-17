import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CategoryItemVM } from '../caterogies';
import { GetTypesExamService } from '../caterogies/use-cases/get-types-exam';
import { ListComponentService } from '../common';
import { ExamMemoryService } from './memory';
import { ProductItemVM } from './models';
import {
  CreateExamService,
  DeleteExamService,
  FindExamService,
  GetExamsService,
  UpdateExamService,
} from './use-cases';

@Injectable()
export class ExamsService extends ListComponentService<ProductItemVM> {
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

  getTypesExam$(): Observable<Array<CategoryItemVM>> {
    return this.getTypesExamService.exec();
  }
}
