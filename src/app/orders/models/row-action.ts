export enum RowActionOrder {
  update = 'update',
  delete = 'delete',
}

export const ORDER_EDIT = [
  {
    name: 'Editar',
    value: RowActionOrder.update,
    icon: 'edit'
  },
  {
    name: 'Emilimar',
    value: RowActionOrder.delete,
    icon: 'delete'
  } ,
];

export const ORDER_NOT_EDIT = [
  {
    name: 'Ver',
    value: RowActionOrder.update,
    icon: 'remove_red_eye'
  },
];
