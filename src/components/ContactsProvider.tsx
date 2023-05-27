import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ContactsContext} from '../contexts/ContactsContext.ts';
import {PLACEHOLDER_CONTACTS} from '../data/constants.ts';

export const ContactsProvider = ({children}) => {
  const [contacts, setContacts] = useState(PLACEHOLDER_CONTACTS);

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((prevContact) => prevContact.id !== id);
    });
  };

  const saveEditedContact = (contact) => {
    setContacts((prevContacts) => {
      return prevContacts.map((prevContact) => prevContact.id === contact.id ? contact : prevContact);
    });
  };

  const saveAddedContact = (contact) => {
    setContacts((prevContacts) => {
      contact.id = uuidv4();
      return [...prevContacts, contact];
    });
  };

  const providerValue = {contacts, handleDeleteContact, saveEditedContact, saveAddedContact};

  return (
    <ContactsContext.Provider value={providerValue}>
      {children}
    </ContactsContext.Provider>
  );
}