import {useContext} from 'react';

import {ContactsContext} from '../contexts/ContactsContext.ts';
import type {Contact, ContactsContextType} from '../data/types.ts';

export const useContacts = (): Contact[] => {
  const {contacts} = useContext(ContactsContext) as Partial<ContactsContextType>;

  if (!contacts) {
    throw new Error('useContacts must be used within ContactsProvider');
  }

  return contacts;
};
