import {PLACEHOLDER_CONTACTS} from '../data/constants.ts';

export const getInitialContacts = () => {
  const storedContacts = localStorage.getItem('contacts');

  // showing PLACEHOLDER_CONTACTS requires only for the demonstration purpose
  return storedContacts ? JSON.parse(storedContacts) : PLACEHOLDER_CONTACTS;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};