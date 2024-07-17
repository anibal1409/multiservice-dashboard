import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import {
  ConfirmModalComponent,
  OptionAction,
  StateService,
  TableDataVM,
  TableService,
} from '../common';
import { FormComponent } from './form';
import { RowActionCustomer } from './models';
import { CustomerItemVM } from './models/customer-item-vm';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, OnDestroy {
  data: TableDataVM = {
    headers: [
      {
        columnDef: 'idDocument',
        header: 'Documento',
        cell: (element: { [key: string]: string }) => `${element['idDocument']}`,
      },
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'phone',
        header: 'Teléfono',
        cell: (element: { [key: string]: string }) => `${element['phone'] || ''}`,
      },
    ],
    body: [],
    options: [],
  };

  loading = false;

  private sub$ = new Subscription();
  constructor(
    private tableService: TableService,
    private usersService: PatientsService,
    private stateService: StateService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.usersService.getData$().subscribe((data) => {
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );
    this.usersService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionCustomer.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionCustomer.delete:
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

  showConfirm(item: CustomerItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar cliente',
          body: `¿Está seguro que desea eliminar el cliente <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.usersService.delete(item?.id || 0);
      }
    });
  }
}

