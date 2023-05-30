import {useContext} from 'react';

import {ContactsContext} from '../contexts/ContactsContext.ts';
import type {Contact, ContactsContextType} from '../data/types.ts';

export const useSaveContact = (): {
  saveAddedContact: (value: Contact) => void;
  saveEditedContact: (value: Contact) => void
} => {
  const {saveEditedContact, saveAddedContact} = useContext(ContactsContext) as Partial<ContactsContextType>;

  if (!saveEditedContact || !saveAddedContact) {
    throw new Error('useSaveContact must be used within ContactsProvider');
  }

  return {saveEditedContact, saveAddedContact};
};
