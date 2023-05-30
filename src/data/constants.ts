import {Contact} from './types.ts';

export const PLACEHOLDER_CONTACTS: Contact[] = [
  {
    id: '1',
    firstName: 'Eva',
    lastName: 'Stone',
    email: 'eva.stone@example.com',
    country: 'Spain',
  },
  {
    id: '2',
    firstName: 'Dustin',
    lastName: 'Scott',
    email: 'dustin.scott@example.com',
    country: 'Australia',
  },
  {
    id: '3',
    firstName: 'Johnny',
    lastName: 'Mccoy',
    email: 'johnny.mccoy@example.com',
    country: 'India',
  },
  {
    id: '4',
    firstName: 'Clayton',
    lastName: 'Jacobs',
    email: 'clayton.jacobs@example.com',
    country: 'Egypt',
  },
  {
    id: '5',
    firstName: 'Felicia',
    lastName: 'Webb',
    email: 'felicia.webb@example.com',
    country: 'Malta',
  },
];

export const INITIAL_CONTACT: Contact = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  country: '',
};
export const EMAIL_REGEX = '([a-zA-Z0-9]+[\\._-]?)*[a-zA-Z0-9]+@(([a-zA-Z0-9]+\\.?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,})';
