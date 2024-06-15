import { USER_ROLES_VALUE } from '../model';
import { UserItemVM } from '../model/user-item-vm';
import { User2UserVM } from './user-2-user-vm';

export function User2UserItemVM(user: any): UserItemVM {
  const userVM = User2UserVM(user);
  return {
    ...userVM,
    roleText: USER_ROLES_VALUE[user.role]?.name,
    statusText: user.status ? 'Activo' : 'Inactivo',
    name: `${user.firstName} ${user.lastName}`,
  };
}
