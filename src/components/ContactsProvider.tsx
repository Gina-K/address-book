import {type ReactNode, useEffect, useState} from 'react';
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

  const handleDeleteContact = (id: string) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((prevContact) => prevContact.id !== id);
    });
  };

  const saveEditedContact = (contact: Contact) => {
    setContacts((prevContacts) => {
      return prevContacts.map((prevContact) => prevContact.id === contact.id ? contact : prevContact);
    });
  };

  const saveAddedContact = (contact: Contact) => {
    setContacts((prevContacts) => {
      contact.id = uuidv4();
      return [...prevContacts, contact];
    });
  };

  return (
    <ContactsContext.Provider value={{contacts, handleDeleteContact, saveEditedContact, saveAddedContact}}>
      {children}
    </ContactsContext.Provider>
  );
};