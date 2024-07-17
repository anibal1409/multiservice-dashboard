import { Injectable } from '@angular/core';

import { OrdersService } from 'dashboard-sdk';
import { Observable } from 'rxjs';

import { BaseQuery } from '../../../common/memory-repository';

@Injectable()
export class ReportSaleService {

  constructor(
    private entityServices: OrdersService
  ) { }

  exec(data: BaseQuery): Observable<any> {
    return this.entityServices
    .ordersControllerGeneratePdf(data?.id?.toString() || '0');
  }
}
