import { UserRole } from './roles';

export interface UserVM {
  id: number;
  idDocument: string;
  email: string;
  status: boolean;
  lastName: string;
  firstName: string;
  role: UserRole;
  patientId?: number;
  birthdate: string;
}
