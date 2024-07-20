import { CurrencyPipe } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { Subscription } from 'rxjs';

import {
  ConfirmModalComponent,
  formatNumberToDigits,
  OptionAction,
  StateService,
  TableDataVM,
  TableService,
  UserStateService,
} from '../common';
import { UserRole } from '../users/model';
import {
  RowActionSale,
  SaleItemVM,
} from './models';
import { SalesService } from './sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, OnDestroy {
  data: TableDataVM = {
    headers: [
      {
        columnDef: 'id',
        header: 'Código',
        cell: (element: { [key: string]: string }) => `${formatNumberToDigits(+element['id'])}`,
      },
      {
        columnDef: 'date',
        header: 'Fecha',
        cell: (element: { [key: string]: string }) => `${moment(element['date']).format('DD/MM/YYYY HH:mm')}`,
      },
      {
        columnDef: 'customerName',
        header: 'Cliente',
        cell: (element: { [key: string]: string }) => `${element['customerName']}`,
      },
      {
        columnDef: 'stageText',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['stageText']}`,
      },
      {
        columnDef: 'total',
        header: 'Total',
        cell: (element: { [key: string]: string }) => `${this.currency.transform(element['total'])}`,
      },
    ],
    body: [],
    options: [],
  };

  loading = false;
  showReport = false;

  private sub$ = new Subscription();
  constructor(
    private tableService: TableService,
    private entityService: SalesService,
    private stateService: StateService,
    private matDialog: MatDialog,
    private router: Router,
    private currency: CurrencyPipe,
    private userStateService: UserStateService,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.entityService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.entityService.getData$().subscribe((data) => {
        console.log(data);
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );
    this.entityService.get({});
    this.showReport = this.userStateService.getRole() !== UserRole.SalesAdvisor;
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionSale.update:
        this.router.navigate(['/dashboard/sales/form'], {
          queryParams: {
            id: option.data['id'],
          }
        });
        break;
      case RowActionSale.delete:
        this.showConfirm(option.data as any);
        break;
      case RowActionSale.print:
        this.printSale(option.data as any);
        break;
    }
  }

  showConfirm(item: SaleItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar venta',
          body: `¿Está seguro que desea eliminar la venta de <strong>${item?.customerName}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.entityService.delete(item?.id || 0);
      }
    });
  }

  goReport(): void {
    this.router.navigate(['/dashboard/sales/report']);
  }

  printSale(item: SaleItemVM): void {
    this.sub$.add(
      this.entityService.printSale(item.id || 0).subscribe(
        (report) => {
          this.entityService.openPDF(report);
        }
      )
    );
  }
}
