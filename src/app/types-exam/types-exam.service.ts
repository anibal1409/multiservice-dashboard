import { Injectable } from '@angular/core';

import { ListComponentService } from '../common/memory-repository';
import { TypesExamMemoryService } from './memory/types-exam-memory';
import { TypeExamItemVM } from './model';
import {
  CreateTypeExamService,
  DeleteTypeExamService,
  FindTypeExamService,
  GetTypesExamService,
  UpdateTypeExamService,
} from './use-cases';

@Injectable()
export class TypesExamService extends ListComponentService<TypeExamItemVM> {
  constructor(
    public getSchoolsService: GetTypesExamService,
    public typesExamMemoryService: TypesExamMemoryService,
    public createSchoolService: CreateTypeExamService,
    public deleteSchoolService: DeleteTypeExamService,
    public findSchoolService: FindTypeExamService,
    public updateSchoolService: UpdateTypeExamService,
  ) {
    super(
      getSchoolsService,
      typesExamMemoryService,
      deleteSchoolService,
      createSchoolService,
      updateSchoolService,
      findSchoolService,
    );
  }
}