export enum RowActionSale {
  update = 'update',
  delete = 'delete',
}

export const SALE_EDIT = [
  {
    name: 'Editar',
    value: RowActionSale.update,
    icon: 'edit'
  },
  {
    name: 'Emilimar',
    value: RowActionSale.delete,
    icon: 'delete'
  } ,
];

export const SALE_NOT_EDIT = [
  {
    name: 'Ver',
    value: RowActionSale.update,
    icon: 'remove_red_eye'
  },
];
