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
import { ExamsService } from './exams.service';
import { FormComponent } from './form';
import {
  ProductItemVM,
  ProductVM,
  RowActionExam,
} from './models';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit, OnDestroy {
  dataTable: TableDataVM<ProductItemVM> = {
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
        columnDef: 'stock',
        header: 'Existencias',
        cell: (element: { [key: string]: string }) => `${element['stock']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;  
  
  constructor(
    private entityService: ExamsService,
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
      case RowActionExam.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionExam.delete:
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

  showConfirm(item: ProductVM): void {
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
