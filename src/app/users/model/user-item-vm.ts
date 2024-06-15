import { RowOptionVM } from '../../common/table';
import { RowActionUser } from './row-action';
import { UserVM } from './users-vm';

export interface UserItemVM extends UserVM {
  roleText?: string;
  statusText?: string;
  name?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionUser>>;
  };
}
