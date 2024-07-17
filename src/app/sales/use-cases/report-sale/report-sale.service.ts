import { Injectable } from '@angular/core';

import { SaleService } from 'dashboard-sdk';
import { Observable } from 'rxjs';

import { BaseQuery } from '../../../common/memory-repository';

@Injectable()
export class ReportSaleService {

  constructor(
    private entityServices: SaleService
  ) { }

  exec(data: BaseQuery): Observable<any> {
    return this.entityServices
    .salesControllerGeneratePdf(data?.id?.toString() || '0');
  }
}
