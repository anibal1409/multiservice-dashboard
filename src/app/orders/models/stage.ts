export enum StageOrder {
  Required = 'Required',
  Cancelled = 'Cancelled',
  Paid = 'Paid',
  Completed = 'Completed',
  All = 'All',
}


export const STAGE_ORDER = [
  {
    name: 'Solicitado',
    value: StageOrder.Required,
    disabled: false,
    order: 0,
  },
  {
    name: 'Cancelado',
    value: StageOrder.Cancelled,
    disabled: false,
    order: 1,
  },
  {
    name: 'Pagado',
    value: StageOrder.Paid,
    disabled: false,
    order: 2,
  },
  {
    name: 'Completado',
    value: StageOrder.Completed,
    disabled: false,
    order: 3,
  },
];

export const STAGE_ORDER_VALUE: { [key: string]: { name: string; value: StageOrder, disabled: boolean, order: number} } = {
  [StageOrder.Required]: STAGE_ORDER[0],
  [StageOrder.Cancelled]: STAGE_ORDER[1],
  [StageOrder.Paid]: STAGE_ORDER[2],
  [StageOrder.Completed]: STAGE_ORDER[3],
};

export const STAGES_ACTIVES = [StageOrder.Required];
