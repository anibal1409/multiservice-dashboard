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
import {
  CategoryItemVM,
  CategoryM,
  RowActionCategory,
} from './model';
import { TypesExamService } from './types-exam.service';

@Component({
  selector: 'app-types-exam',
  templateUrl: './types-exam.component.html',
  styleUrls: ['./types-exam.component.scss']
})
export class TypesExamComponent implements OnInit, OnDestroy {
  dataTable: TableDataVM<CategoryItemVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;  
  
  constructor(
    private typesExamService: TypesExamService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.typesExamService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.typesExamService.getData$().subscribe((items) => {
        this.dataTable = {
          ...this.dataTable,
          body: items || [],
        };

        this.tableService.setData(this.dataTable);
      })
    );
    this.typesExamService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionCategory.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionCategory.delete:
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

  showConfirm(item: CategoryM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar categoría',
          body: `¿Está seguro que desea eliminar la categoría <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.typesExamService.delete(item?.id || 0);
      }
    });
  }

}
