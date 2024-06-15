export enum UserRole {
  Super = 'super',
  Bionalist = 'bionalist',
  Administrativessistant = 'administrative-assistant',
  Patient = 'patient',
  LaboratoryAssistant = 'laboratory-assistant',
  Manager = 'manager',
}

export const USER_ROLES = [
  {
    name: 'Super usuario',
    value: UserRole.Super,
  },
  {
    name: 'Gerente',
    value: UserRole.Manager,
  },
  {
    name: 'Bionalista',
    value: UserRole.Bionalist,
  },
  {
    name: 'Asistente administrativo',
    value: UserRole.Administrativessistant,
  },
  {
    name: 'Paciente',
    value: UserRole.Patient,
  },
  {
    name: 'Auxiliar de laboratorio',
    value: UserRole.LaboratoryAssistant,
  }
];

export const USER_ROLES_VALUE: { [key: string]: { name: string; value: UserRole} } = {
  [UserRole.Super]: USER_ROLES[0],
  [UserRole.Manager]: USER_ROLES[1],
  [UserRole.Bionalist]: USER_ROLES[2],
  [UserRole.Administrativessistant]: USER_ROLES[3],
  [UserRole.Patient]: USER_ROLES[4],
  [UserRole.LaboratoryAssistant]: USER_ROLES[5],
};
