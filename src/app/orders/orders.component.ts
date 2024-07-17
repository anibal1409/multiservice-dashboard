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
} from '../common';
import {
  OrderItemVM,
  RowActionOrder,
} from './models';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  data: TableDataVM = {
    headers: [
      {
        columnDef: 'id',
        header: 'Código',
        cell: (element: { [key: string]: string }) => `${formatNumberToDigits(+element['id'])}`,
      },
      {
        columnDef: 'date',
        header: 'Solicitado en',
        cell: (element: { [key: string]: string }) => `${moment(element['date']).format('DD/MM/YYYY HH:mm')}`,
      },
      {
        columnDef: 'provider',
        header: 'Proveedor',
        cell: (element: { [key: string]: string }) => `${element['provider']}`,
      },
      {
        columnDef: 'stageText',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['stageText']}`,
      },
      {
        columnDef: 'counterProducts',
        header: 'N. de Productos',
        cell: (element: { [key: string]: string }) => `${element['counterProducts']}`,
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

  private sub$ = new Subscription();
  constructor(
    private tableService: TableService,
    private entityService: OrdersService,
    private stateService: StateService,
    private matDialog: MatDialog,
    private router: Router,
    private currency: CurrencyPipe,
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
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionOrder.update:
        this.router.navigate(['/dashboard/orders/form'], {
          queryParams: {
            id: option.data['id'],
          }
        });
        break;
      case RowActionOrder.delete:
        this.showConfirm(option.data as any);
        break;
    }
  }

  showConfirm(item: OrderItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar pedido',
          body: `¿Está seguro que desea eliminar el pedido a <strong>${item?.provider}</strong>?`,
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
}
