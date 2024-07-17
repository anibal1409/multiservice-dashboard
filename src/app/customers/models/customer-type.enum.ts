export enum CustomerType {
  NaturalPerson = 'natural-person',
  LegalPerson = 'legal-person',
}

export const CUSTOMER_TYPE = [
  {
    name: 'Persona Jurídica',
    value: CustomerType.LegalPerson,
    abbr: 'PJ',
  },
  {
    name: 'Persona Natural',
    value: CustomerType.NaturalPerson,
    abbr: 'PN',
  },
];

export const CUSTOMER_TYPE_VALUE: {
  [key: string]: { name: string; value: CustomerType; abbr: string; };
} = {
  [CustomerType.LegalPerson]: CUSTOMER_TYPE[0],
  [CustomerType.NaturalPerson]: CUSTOMER_TYPE[1],
};
