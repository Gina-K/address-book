import {useState} from 'react';

import {INITIAL_CONTACT} from '../../data/constants.ts';
import type {Contact} from '../../data/types.ts';
import {useContacts} from '../../hooks/useContacts.ts';
import {AddButton} from '../Common/AddButton.tsx';
import {ContactCardWrapper} from './ContactCardWrapper.tsx';

import '../../styles/ContactCardsContainer/ContactCardsContainer.css';

export const ContactCardsContainer = () => {
  const contacts = useContacts();
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [hasActiveCard, setHasActiveCard] = useState<boolean>(false);

  const handleAddContact = (): void => {
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
                              forceEditing={true}
                              isAdding={isAdding}
                              setIsAdding={setIsAdding}
                              hasActiveCard={hasActiveCard}
                              setHasActiveCard={setHasActiveCard}
          />
        </li>
      }

      {contacts.map((contact: Contact) => (
        <li key={contact.id} className="card-item">
          <ContactCardWrapper contact={contact}
                              forceEditing={false}
                              isAdding={isAdding}
                              setIsAdding={setIsAdding}
                              hasActiveCard={hasActiveCard}
                              setHasActiveCard={setHasActiveCard}
          />
        </li>
      ))}
    </ul>
  );
};
