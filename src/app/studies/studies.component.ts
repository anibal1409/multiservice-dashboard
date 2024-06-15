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
  OptionAction,
  StateService,
  TableDataVM,
  TableService,
} from '../common';
import {
  RowActionStudy,
  StudyItemVM,
} from './models';
import { StudiesService } from './studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit, OnDestroy {
  data: TableDataVM = {
    headers: [
      {
        columnDef: 'date',
        header: 'Fecha',
        cell: (element: { [key: string]: string }) => `${moment(element['date']).format('DD/MM/YYYY')}`,
      },
      {
        columnDef: 'patientName',
        header: 'Paciente',
        cell: (element: { [key: string]: string }) => `${element['patientName']}`,
      },
      {
        columnDef: 'stageText',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['stageText']}`,
      },
      {
        columnDef: 'counterExams',
        header: 'N. de Examenes',
        cell: (element: { [key: string]: string }) => `${element['counterExams']}`,
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
    private usersService: StudiesService,
    private stateService: StateService,
    private matDialog: MatDialog,
    private router: Router,
    private currency: CurrencyPipe,
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
        console.log(data);
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
      case RowActionStudy.update:
        this.router.navigate(['/dashboard/studies/form'], {
          queryParams: {
            id: option.data['id'],
          }
        });
        break;
      case RowActionStudy.delete:
        this.showConfirm(option.data as any);
        break;
    }
  }

  showConfirm(item: StudyItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar estudio',
          body: `¿Está seguro que desea eliminar el estudio del paciente <strong>${item?.patientName}</strong>?`,
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

