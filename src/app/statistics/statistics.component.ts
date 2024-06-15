import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { StateService } from '../common';
import {
  CharVM,
  StatisticsCountersVM,
} from './models';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {

  sub$ = new Subscription();
  loading = false;  
  statistics: StatisticsCountersVM = {
    exams: 0,
    patients: 0,
    studies: 0,
    users: 0,
  };
  genders: Array<CharVM> = [];
  exams: Array<CharVM> = [];
  typesExam: Array<CharVM> = [];
  ctrlMonth = new FormControl();
  months: Array<{name: string; value: number}> = [
    {
      name: 'Enero',
      value: 0,
    },
    {
      name: 'Febrero',
      value: 1,
    },
    {
      name: 'Marzo',
      value: 2,
    },
    {
      name: 'Abril',
      value: 3,
    },
    {
      name: 'Mayo',
      value: 4,
    },
    {
      name: 'Junio',
      value: 5,
    },
    {
      name: 'Julio',
      value: 6,
    },
    {
      name: 'Agosto',
      value: 7,
    },
    {
      name: 'Septiembre',
      value: 8,
    },
    {
      name: 'Octubre',
      value: 9,
    },
    {
      name: 'Noviembre',
      value: 10,
    },
    {
      name: 'Diciembre',
      value: 11,
    },
  ];
  
  constructor(
    private entityService: StatisticsService,
    private stateService: StateService,
  ) {}

  ngOnInit(): void {
    const currentMonth = moment().month();
    this.ctrlMonth.setValue(currentMonth);
    this.sub$.add(
      this.ctrlMonth.valueChanges.subscribe(() => {
        this.changeMonth();
      }
      )
    );
    this.changeMonth();
    
    this.sub$.add(
      this.entityService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.sub$.add(
      this.entityService.getStatistics$().subscribe((statistics) => {
        this.statistics = statistics;
      })
    );
  }

  changeMonth(): void {
    const month = this.ctrlMonth.value + 1;
    const year = moment().year();
    const startMonth = moment(`${month}-${year}`, 'MM-YYYY').startOf('month').toISOString();
    const endMonth = moment(`${month}-${year}`, 'MM-YYYY').endOf('month').toISOString();
    this.sub$.add(
      this.entityService.getMonthStatistics$({
        start: startMonth,
        end: endMonth,
      }).subscribe((statistics) => {
        this.exams = statistics.exams;
        this.genders = statistics.gender;
        this.typesExam = statistics.typesExam;        
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}