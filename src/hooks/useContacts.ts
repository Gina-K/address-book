import {useContext} from 'react';
import {ContactsContext} from '../contexts/ContactsContext.ts';

export const useContacts = () => {
  const {contacts} = useContext(ContactsContext);
  if (!contacts) {
    throw new Error('useContacts must be used within ContactsProvider');
  }
  return contacts;
};