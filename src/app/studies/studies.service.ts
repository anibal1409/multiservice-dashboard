import { Injectable } from '@angular/core';

import {
  finalize,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  ListComponentService,
} from '../common/memory-repository';
import { ExamItemVM } from '../exams';
import { GetExamsService } from '../exams/use-cases/get-exams';
import { FindPatientByDocumentService } from '../patients/use-cases';
import { StudyMemoryService } from './memory';
import { StudyItemVM } from './models';
import {
  CreateStudyService,
  DeleteStudyService,
  FindStudyService,
  GetStudiesService,
  UpdateStudyService,
} from './use-cases';

@Injectable()
export class StudiesService extends ListComponentService<StudyItemVM, BaseQuery> {
  constructor(
    public getEntityService: GetStudiesService,
    public memoryEntityService: StudyMemoryService,
    public createEntityService: CreateStudyService,
    public deleteEntityService: DeleteStudyService,
    public findEntityService: FindStudyService,
    public updateEntityService: UpdateStudyService,
    private findPatientByDocumentService: FindPatientByDocumentService,
    private getExamsService: GetExamsService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }

  findPatientByDocument$(document: string) {
    this.setLoading(true);
    return this.findPatientByDocumentService.exec(document).pipe(
      finalize(
        () => this.setLoading(false)
      )
    );
  }

  getExams$(): Observable<Array<ExamItemVM>> {
    return this.getExamsService.exec();
  }
}
