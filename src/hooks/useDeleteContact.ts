import {useContext} from 'react';
import {ContactsContext} from '../contexts/ContactsContext.ts';

export const useDeleteContact = () => {
  const {handleDeleteContact} = useContext(ContactsContext);
  if (!handleDeleteContact) {
    throw new Error('useDeleteContact must be used within ContactsProvider');
  }
  return handleDeleteContact;
};