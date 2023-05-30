import {type ReactNode, useCallback, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import {ContactsContext} from '../contexts/ContactsContext.ts';
import type {Contact} from '../data/types.ts';
import {getInitialContacts} from '../utils/common.ts';

type ContactsProviderProps = {
  children: ReactNode;
}

export const ContactsProvider = ({children}: ContactsProviderProps) => {
  const initialContacts = getInitialContacts();
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify((contacts)));
  }, [contacts]);

  const deleteContact = useCallback((id: string): void => {
    setContacts((prevContacts) => {
      return prevContacts.filter((prevContact) => prevContact.id !== id);
    });
  }, []);

  const saveEditedContact = useCallback((contact: Contact): void => {
    setContacts((prevContacts) => {
      return prevContacts.map((prevContact) => prevContact.id === contact.id ? contact : prevContact);
    });
  }, []);

  const saveAddedContact = useCallback((contact: Contact): void => {
    setContacts((prevContacts) => {
      contact.id = uuidv4();
      return [...prevContacts, contact];
    });
  }, []);

  return (
    <ContactsContext.Provider value={{contacts, deleteContact, saveEditedContact, saveAddedContact}}>
      {children}
    </ContactsContext.Provider>
  );
};
