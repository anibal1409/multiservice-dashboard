import { UserRole } from './roles';

export interface SaveUser {
  email: string;
  role: UserRole;
  idDocument: string;
  name: string;
  lastName?: string;
  firstName?: string;
  status: boolean;
  id?: number;
  patientId?: number;
}
