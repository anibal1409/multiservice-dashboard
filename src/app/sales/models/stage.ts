export enum StageSale {
  Pending = 'Pending',
  Cancelled = 'Cancelled',
  Paid = 'Paid',
  Printed = 'Printed',
  All = 'All',
}


export const STAGE_SALE = [
  {
    name: 'Pendiente',
    value: StageSale.Pending,
    disabled: false,
    order: 0,
  },
  {
    name: 'Cancelado',
    value: StageSale.Cancelled,
    disabled: false,
    order: 1,
  },
  {
    name: 'Pagado',
    value: StageSale.Paid,
    disabled: false,
    order: 2,
  },
  {
    name: 'Impreso',
    value: StageSale.Printed,
    disabled: true,
    order: 3,
  },
];

export const STAGE_STUDY_VALUE: { [key: string]: { name: string; value: StageSale, disabled: boolean, order: number} } = {
  [StageSale.Pending]: STAGE_SALE[0],
  [StageSale.Cancelled]: STAGE_SALE[1],
  [StageSale.Paid]: STAGE_SALE[2],
  [StageSale.Printed]: STAGE_SALE[3],
};

export const STAGES_ACTIVES = [StageSale.Pending];