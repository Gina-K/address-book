import {useContext} from 'react';
import {ContactsContext} from '../contexts/ContactsContext.ts';

export const useSaveContact = () => {
  const {saveEditedContact, saveAddedContact} = useContext(ContactsContext);
  if (!saveEditedContact || !saveAddedContact) {
    throw new Error('useSaveContact must be used within ContactsProvider');
  }
  return {saveEditedContact, saveAddedContact};
};