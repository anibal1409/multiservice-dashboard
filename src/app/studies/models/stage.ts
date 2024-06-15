export enum StageStudy {
  Pending = 'Pending',
  Cancelled = 'Cancelled',
  Paid = 'Paid',
  SampleTaken = 'SampleTaken',
  InAnalysis = 'InAnalysis',
  Printed = 'Printed',
  Sent = 'Sent',
  Delivered = 'Delivered',
  Downloaded = 'Downloaded',
}


export const STAGE_STUDY = [
  {
    name: 'Pendiente',
    value: StageStudy.Pending,
  },
  {
    name: 'Cancelado',
    value: StageStudy.Cancelled,
  },
  {
    name: 'Pagado',
    value: StageStudy.Paid,
  },
  {
    name: 'Muestra tomada',
    value: StageStudy.SampleTaken,
  },
  {
    name: 'En análisis',
    value: StageStudy.InAnalysis,
  },
  {
    name: 'Impreso',
    value: StageStudy.Printed,
  },
  {
    name: 'Enviado',
    value: StageStudy.Sent,
  },
  {
    name: 'Entregado',
    value: StageStudy.Delivered,
  },
  {
    name: 'Descargado',
    value: StageStudy.Downloaded,
  },
];

export const STAGE_STUDY_VALUE: { [key: string]: { name: string; value: StageStudy} } = {
  [StageStudy.Pending]: STAGE_STUDY[0],
  [StageStudy.Cancelled]: STAGE_STUDY[1],
  [StageStudy.Paid]: STAGE_STUDY[2],
  [StageStudy.SampleTaken]: STAGE_STUDY[3],
  [StageStudy.InAnalysis]: STAGE_STUDY[4],
  [StageStudy.Printed]: STAGE_STUDY[5],
  [StageStudy.Sent]: STAGE_STUDY[6],
  [StageStudy.Delivered]: STAGE_STUDY[7],
  [StageStudy.Downloaded]: STAGE_STUDY[8],
};

export const STAGES_ACTIVES = [StageStudy.Pending, StageStudy.InAnalysis, StageStudy.Paid, StageStudy.SampleTaken];