import {PLACEHOLDER_CONTACTS} from '../data/constants.ts';
import type {Contact} from '../data/types.ts';

export const getInitialContacts = (): Contact[] => {
  const storedContacts = localStorage.getItem('contacts');

  // showing PLACEHOLDER_CONTACTS requires only for the demonstration purpose
  return storedContacts ? JSON.parse(storedContacts) : PLACEHOLDER_CONTACTS;
};
