import { CurrencyPipe } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import {
  ConfirmModalComponent,
  StateService,
} from '../common';
import {
  OptionAction,
  TableDataVM,
  TableService,
} from '../common/table';
import { FormComponent } from './form';
import {
  RowActionservice,
  ServiceItemVM,
  ServiceVM,
} from './models';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  dataTable: TableDataVM<ServiceItemVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'price',
        header: 'Precio',
        cell: (element: { [key: string]: string }) => `${this.currency.transform(element['price'])}`,
      },
      {
        columnDef: 'status',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['statusText']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;  
  
  constructor(
    private entityService: ServicesService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
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
      this.entityService.getData$().subscribe((items) => {
        this.dataTable = {
          ...this.dataTable,
          body: items || [],
        };

        this.tableService.setData(this.dataTable);
      })
    );
    this.entityService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionservice.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionservice.delete:
        this.showConfirm(option.data as any);
        break;
    }
  }

  showModal(id?: number): void {
    const modal = this.matDialog.open(FormComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        id,
      },
    });
    modal.componentInstance.closed.subscribe(() => {
      modal.close();
    });
  }

  showConfirm(item: ServiceVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar producto',
          body: `¿Está seguro que desea eliminar el producto <strong>${item.name}</strong>?`,
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
