import { Location } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';
import { ToastService } from 'toast';

import {
  CustomCurrencyMaskConfig,
} from '../../common/currency-mask/mask-config';
import { ExamItemVM } from '../../exams';
import {
  StudyExam,
  StudyVM,
} from '../models';
import {
  STAGE_STUDY,
  STAGES_ACTIVES,
  StageStudy,
} from '../models/stage';
import { StudiesService } from '../studies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  id!: number;

  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  submitDisabled = true;

  oldFormValue: StudyVM = {
    status: true,
    id: 0,
    date: new Date().toDateString(),
    patientId: 0,
    sendEmail: false,
    stage: StageStudy.Pending,
    studyExams: [],
    total: 0,
    note: '',
  };

  stagesStudy = STAGE_STUDY;

  optionsCurrency = CustomCurrencyMaskConfig;

  showValuesAccept = [
    StageStudy.InAnalysis,
    StageStudy.Delivered,
    StageStudy.Printed,
    StageStudy.Sent,
    StageStudy.Delivered,
  ];
  disabledValuesAccept = [
    StageStudy.Delivered,
    StageStudy.Printed,
    StageStudy.Sent,
    StageStudy.Delivered,
  ];
  showDeleteAccept = [
    StageStudy.Pending,
    StageStudy.InAnalysis,
    StageStudy.Paid,
    StageStudy.SampleTaken,
  ];
  showValues = false;
  showDelete = true;

  examsBase: Array<ExamItemVM> = [];
  exams: Array<ExamItemVM> = [];
  ctrlExam = new FormControl();

  formDisabled = false;

  constructor(
    private entityService: StudiesService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private location: Location,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          if (queryParams['id']) {
            this.id = +queryParams['id'];
            this.loadData();
          }
        }
      )
    );
    this.sub$.add(
      this.entityService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.getExams();
    this.createForm();
    this.loadData();
  }

  loadData(): void {
    if (this.id) {
      this.sub$.add(
        this.entityService
          .find$({ id: this.id })
          .subscribe((entity) => {
            console.log(entity);
            if (entity && !this.oldFormValue.id) {
              this.oldFormValue = {
                patientId: entity.patientId,
                patientDocument: entity.patient?.idDocument,
                patientName: entity.patient?.name,
                patientAge: entity.patient?.age,
                patientEmail: entity.patient?.email,
                patientPhone: entity.patient?.phone,
                patientGender: entity.patient?.gender,

                date: entity.date,
                stage: entity.stage,
                id: entity.id,

                sendEmail: entity.sendEmail,
                total: entity.total,
                studyExams: entity.studyExams.map(
                  (studyExam) => {
                    return {
                      id: studyExam.id,
                      examId: studyExam.exam?.id,
                      value: studyExam.value,
                      name: studyExam.exam?.name,
                      price: studyExam.exam?.price,
                    };
                  }
                ),
              } as any;
              this.form.patchValue(
                {
                  ...this.oldFormValue,
                },
                {
                  emitEvent: false,
                }
              );
              this.form.get('patientDocument')?.disable();
              for (const studyExam of entity.studyExams) {
                this.addExam(studyExam);
              }
              this.updateExamValue();
            }
          })
      );
    }
  }

  clickClosed(): void {
    this.router.navigate(['/dashboard/studies']);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      patientId: [null, [Validators.required]],
      patientDocument: [null, [Validators.required]],
      patientName: [{ value: '', disabled: true }],
      patientAge: [{ value: '', disabled: true }],
      patientEmail: [{ value: '', disabled: true }],
      patientPhone: [{ value: '', disabled: true }],
      patientGender: [{ value: '', disabled: true }],

      date: [new Date(), [Validators.required]],
      stage: [StageStudy.Pending, [Validators.required]],
      id: [0],

      sendEmail: [false, [Validators.required]],
      total: [{ value: 0, disabled: true }, [Validators.required]],
      studyExams: this.formBuilder.array([]),
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
          
      })
    );

    this.sub$.add(
      this.form.get('stage')?.valueChanges.subscribe(
        () => {
          this.updateExamValue();
        }
      )
    );
  }

  private updateExamValue(): void {
    const stage = this.form.get('stage')?.value;
    this.showValues = this.showValuesAccept.includes(stage);
    const disabled = this.disabledValuesAccept.includes(stage);
    const formArray =  this.studyExamsArray;
    this.showDelete = this.showDeleteAccept.includes(stage);
    for (let i = 0; i < formArray.length; i++) {
      if (disabled) {
        formArray.at(i).get('value')?.disable();
      } else {
        formArray.at(i).get('value')?.enable();
      }
    }
    if (!STAGES_ACTIVES.includes(stage)) {
      this.form.disable({emitEvent: false});
      this.formDisabled = true;
      this.form.get('stage')?.enable({emitEvent: false});
    }
  }

  get studyExamsArray() {
    return this.form.get('studyExams') as FormArray;
  }

  addExam(studyExam?: StudyExam) {
    if (this.ctrlExam.valid || studyExam) {
      const exam: ExamItemVM = this.ctrlExam.value;
      if (exam || studyExam) {
        this.studyExamsArray.push(this.formBuilder.group({
          id: [null || studyExam?.id],
          examId: [exam?.id || studyExam?.exam?.id, Validators.required],
          name: [{ value: exam?.name || studyExam?.exam?.name, disabled: true }, Validators.required],
          value: ['' || studyExam?.value],
          price: [{ value: exam?.price || studyExam?.exam?.price, disabled: true }],
        }));
        this.ctrlExam.reset();
        this.updateExams();
      }
    }
  }

  removeExam(index: number) {
    this.studyExamsArray.removeAt(index);
    this.updateExams();
  }

  private updateExams(): void {
    const examIds = this.studyExamsArray.value.map((x: any) => x.examId);
    this.exams = this.examsBase.filter((x) => !examIds.includes(x.id));
    this.updateTotal();
  }

  clickSave(): void {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  private create(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.entityService
          .create({
            ...this.form.getRawValue(),
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
              this.toastService.success('¡Estudio creado exitosamente!');
            }
          )
      );
    }
  }

  private update(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.entityService
          .update({
            ...this.form.getRawValue(),
            id: this.id,
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
              this.toastService.success('¡Estudio actualizado exitosamente!');
            }
          )
      );
    }
  }

  findPatient(): void {
    const patientDocument = this.form.get('patientDocument')?.value;
    if (patientDocument && !this.id) {
      this.sub$.add(
        this.entityService.findPatientByDocument$(patientDocument).subscribe(
          (patient) => {
            console.log(patient);
            if (patient?.id) {
              this.form.patchValue({
                patientId: patient.id,
                patientName: patient.name,
                patientAge: patient.age,
                patientEmail: patient.email,
                patientPhone: patient.phone,
                patientGender: patient.gender,
              });
            }
          }
        )
      );
    }
  }

  private getExams(): void {
    this.sub$.add(
      this.entityService.getExams$().subscribe(
        (exams) => {
          this.exams = exams;
          this.examsBase = exams;
          this.updateExams();
        }
      )
    );
  }

  private updateTotal(): void {
    const examIds = this.studyExamsArray.value.map((x: any) => x.examId);
    const total = this.examsBase.filter((x) => examIds.includes(x.id)).reduce(
      (accumulator, currentValue) => accumulator + currentValue.price, 0,
    );
    this.form.patchValue({
      total,
    });
  }

  back(): void {
    this.location.back();
  }

}
