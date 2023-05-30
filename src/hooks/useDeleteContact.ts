import {useContext} from 'react';

import {ContactsContext} from '../contexts/ContactsContext.ts';
import type {ContactsContextType} from '../data/types.ts';

export const useDeleteContact = (): ((value: string) => void) => {
  const {deleteContact} = useContext(ContactsContext) as Partial<ContactsContextType>;

  if (!deleteContact) {
    throw new Error('useDeleteContact must be used within ContactsProvider');
  }

  return deleteContact;
};
