export enum StageOrder {
  Required = 'Required',
  Cancelled = 'Cancelled',
  Paid = 'Paid',
  Completed = 'Completed',
  All = 'All',
}


export const STAGE_SALE = [
  {
    name: 'Solicitado',
    value: StageOrder.Required,
  },
  {
    name: 'Cancelado',
    value: StageOrder.Cancelled,
  },
  {
    name: 'Pagado',
    value: StageOrder.Paid,
  },
  {
    name: 'Completado',
    value: StageOrder.Completed,
  },
];

export const STAGE_STUDY_VALUE: { [key: string]: { name: string; value: StageOrder} } = {
  [StageOrder.Required]: STAGE_SALE[0],
  [StageOrder.Cancelled]: STAGE_SALE[1],
  [StageOrder.Paid]: STAGE_SALE[2],
  [StageOrder.Completed]: STAGE_SALE[3],
};

export const STAGES_ACTIVES = [StageOrder.Required];
