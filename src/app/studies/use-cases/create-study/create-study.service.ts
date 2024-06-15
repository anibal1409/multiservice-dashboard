import { Injectable } from '@angular/core';

import { StudiesService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { study2StudyItemVM } from '../../mappers';
import { StudyMemoryService } from '../../memory';
import {
  StudyItemVM,
  StudyVM,
} from '../../models';

@Injectable()
export class CreateStudyService
  implements UseCase<StudyItemVM, StudyVM>
{
  constructor(
    private entityServices: StudiesService,
    private memoryService: StudyMemoryService,
  ) { }

  exec(entitySave: StudyVM): Observable<StudyItemVM> {
    return this.entityServices
      .studiesControllerCreate({
        date: entitySave.date,
        note: entitySave.note,
        total: entitySave.total,
        patient: { id: entitySave.patientId },
        sendEmail: entitySave.sendEmail,
        stage: entitySave.stage,
        studyExams: entitySave.studyExams.map((x) => ({
          exam: { id: x.examId },
          value: x.value,
        })) as any,
      }
      )
      .pipe(
        map(study2StudyItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
