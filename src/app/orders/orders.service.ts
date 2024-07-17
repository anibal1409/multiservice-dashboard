import { Injectable } from '@angular/core';

import {
  finalize,
  Observable,
} from 'rxjs';

import { ListComponentService } from '../common/memory-repository';
import { ProductItemVM } from '../products';
import { GetExamsService } from '../products/use-cases/get-exams';
import { OrderMemoryService } from './memory';
import {
  OrderBaseQuery,
  OrderItemVM,
} from './models';
import {
  CreateStudyService,
  DeleteStudyService,
  FindStudyService,
  GetStudiesService,
  ReportSaleService,
  UpdateStudyService,
} from './use-cases';

@Injectable()
export class OrdersService extends ListComponentService<OrderItemVM, OrderBaseQuery> {
  constructor(
    public getEntityService: GetStudiesService,
    public memoryEntityService: OrderMemoryService,
    public createEntityService: CreateStudyService,
    public deleteEntityService: DeleteStudyService,
    public findEntityService: FindStudyService,
    public updateEntityService: UpdateStudyService,
    private getExamsService: GetExamsService,
    private reportSaleService: ReportSaleService,
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

  getProducts$(): Observable<Array<ProductItemVM>> {
    return this.getExamsService.exec();
  }

  generateReportOrder$(data: OrderBaseQuery): Observable<any> {
    this.setLoading(true);
    return this.reportSaleService.exec(data).pipe(
      finalize(
        () => this.setLoading(false)
      )
    );
  }
}
