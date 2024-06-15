import { Injectable } from '@angular/core';

import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { StudiesService } from '../../../../../dist/dashboard-sdk';
import { UseCase } from '../../../common/memory-repository';
import { study2StudyItemVM } from '../../mappers';
import { StudyMemoryService } from '../../memory';
import { StudyVM } from '../../models';
import { StudyItemVM } from '../../models/study-item-vm';

@Injectable()
export class UpdateStudyService
  implements UseCase<StudyItemVM | null, StudyVM>
{
  constructor(
    private entityServices: StudiesService,
    private memoryService: StudyMemoryService,
  ) { }

  exec(entitySave: StudyVM): Observable<StudyItemVM> {
    return this.entityServices
      .studiesControllerUpdate(
        entitySave.id?.toString() || '0',
        {
          date: entitySave.date,
          note: entitySave.note,
          total: entitySave.total,
          patient: { id: entitySave.patientId },
          sendEmail: entitySave.sendEmail,
          stage: entitySave.stage,
          studyExams: entitySave.studyExams.map((x) => ({
            id: x.id,
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