import React, {useState} from 'react';

import {INITIAL_CONTACT} from '../../data/constants.ts';
import type {Contact} from '../../data/types.ts';
import {useContacts} from '../../hooks/useContacts.ts';
import {useSaveContact} from '../../hooks/useSaveContact.ts';
import {AddButton} from '../Common/AddButton.tsx';
import {ContactCardWrapper} from './ContactCardWrapper.tsx';

import '../../styles/ContactCardsContainer/ContactCardsContainer.css';

export const ContactCardsContainer = () => {
  const contacts = useContacts();
  const {saveEditedContact, saveAddedContact} = useSaveContact();

  const [currentContact, setCurrentContact] = useState<Contact>(INITIAL_CONTACT);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [hasActiveCard, setHasActiveCard] = useState<boolean>(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentContact({
      ...currentContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAfterEditing = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    saveEditedContact(currentContact);
    setHasActiveCard(false);
  };

  const handleSubmitAfterAdding = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <ul className="cards-container">
      <li className="card-item card-item_center">
        <AddButton onAdd={handleAddContact}></AddButton>
      </li>

      {isAdding &&
        <li className="card-item">
          <ContactCardWrapper contact={INITIAL_CONTACT}
                              onSubmit={handleSubmitAfterAdding}
                              onContactChange={handleContactChange}
                              setCurrentContact={setCurrentContact}
                              currentContact={currentContact}
                              forceEditing={true}
                              setIsAdding={setIsAdding}
                              hasActiveCard={hasActiveCard}
                              setHasActiveCard={setHasActiveCard}
          />
        </li>
      }

      {contacts.map((contact: Contact) => (
        <li key={contact.id} className="card-item">
          <ContactCardWrapper contact={contact}
                              onSubmit={handleSubmitAfterEditing}
                              onContactChange={handleContactChange}
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