import {useState} from 'react';
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

  const [currentContact, setCurrentContact] = useState(INITIAL_CONTACT);
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
    <ul className="cards-container">
      <li className="card-item card-item_center">
        <AddButton onAdd={handleAddContact}></AddButton>
      </li>

      {isAdding &&
        <li className="card-item">
          <ContactCardWrapper contact={INITIAL_CONTACT}
                              onSubmit={handleSubmitAfterAdding}
                              onChange={handleContactChange}
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