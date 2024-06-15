import { UserVM } from '../model';

export function User2UserVM(user: any): UserVM {
  return {
    id: user.id,
    idDocument: user.idDocument,
    email: user.email,
    status: user.status,
    role: user.role,
    birthdate: user.birthdate,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}
