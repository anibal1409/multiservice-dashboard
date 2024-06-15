import { UserRole } from '../../users/model';
import { optionMenu } from '../models';

export const MENU: Array<optionMenu> = [
  {
    name: 'Categorías',
    value: 'exam-types',
    icon: 'category',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Productos',
    value: 'exams',
    icon: 'widgets',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Servicios',
    value: 'exams',
    icon: 'layers',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Ventas',
    value: 'studies',
    icon: 'receipt',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Clientes',
    value: 'patients',
    icon: 'supervisor_account',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Estadísticas',
    value: 'statistics',
    icon: 'bar_chart',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist],
  },
  {
    name: 'Usuarios',
    value: 'users',
    icon: 'person',
    permissions: [UserRole.Super, UserRole.Manager],
  },
]