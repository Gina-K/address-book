import {useState} from 'react';

import type {Contact} from '../../data/types.ts';
import {useContacts} from '../../hooks/useContacts.ts';
import {useSaveContact} from '../../hooks/useSaveContact.ts';
import {ContactCardWrapper} from './ContactCardWrapper.tsx';

export const ContactCardsContainer = () => {
  const initialContact = {
    id: '',
    firstName: 'Init',
    lastName: 'Contact',
    email: 'init.contact@example.com',
    country: 'Angola',
  };

  const contacts = useContacts();
  const {saveEditedContact, saveAddedContact} = useSaveContact();

  const [currentContact, setCurrentContact] = useState(initialContact);
  const [isAdding, setIsAdding] = useState(false);
  const [hasActiveCard, setHasActiveCard] = useState(false);

  const handleContactChange = (e) => {
    setCurrentContact({
      ...currentContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAfterEditing = (e) => {
    e.preventDefault();
    saveEditedContact(currentContact);
    setHasActiveCard(false);
  };

  const handleSubmitAfterAdding = (e) => {
    e.preventDefault();
    saveAddedContact(currentContact);
    setIsAdding(false);
    setHasActiveCard(false);
  };

  const handleAddContact = () => {
    if (hasActiveCard) {
      return;
    }

    setIsAdding(true);
    setHasActiveCard(true);
  };

  return (
    <ul>
      <button type="button" onClick={handleAddContact}>Add contact</button>

      {isAdding &&
        <ContactCardWrapper contact={initialContact}
                            onSubmit={handleSubmitAfterAdding}
                            onChange={handleContactChange}
                            setCurrentContact={setCurrentContact}
                            currentContact={currentContact}
                            forceEditing={true}
                            setIsAdding={setIsAdding}
                            hasActiveCard={hasActiveCard}
                            setHasActiveCard={setHasActiveCard}
        />}

      {contacts.map((contact: Contact) => (
        <li key={contact.id}>
          <ContactCardWrapper contact={contact}
                              onSubmit={handleSubmitAfterEditing}
                              onChange={handleContactChange}
                              setCurrentContact={setCurrentContact}
                              currentContact={currentContact}
                              forceEditing={false}
                              setIsAdding={setIsAdding}
                              hasActiveCard={hasActiveCard}
                              setHasActiveCard={setHasActiveCard}
          />
        </li>
      ))}
    </ul>
  );
};