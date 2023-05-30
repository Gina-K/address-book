import {useContext} from 'react';

import {ContactsContext} from '../contexts/ContactsContext.ts';
import type {ContactsContextType} from '../data/types.ts';

export const useDeleteContact = () => {
  const {handleDeleteContact} = useContext(ContactsContext) as Partial<ContactsContextType>;
  if (!handleDeleteContact) {
    throw new Error('useDeleteContact must be used within ContactsProvider');
  }
  return handleDeleteContact;
};