import {useMemo} from 'react';

import type {Contact} from '../../data/types.ts';
import {useContacts} from '../../hooks/useContacts.ts';
import {ContactListItem} from './ContactListItem.tsx';

import '../../styles/ContactsList/ContactsList.css';

export const ContactsList = () => {
  const contacts = useContacts();
  const sortedContacts = useMemo(() => {
    return contacts.sort((a: Contact, b: Contact) => a.lastName.localeCompare(b.lastName));
  }, [contacts]);

  return (
    <div className="contacts-list">
      <div className="list-items__wide-divider"></div>

      <ul className="list-items__container">
        {sortedContacts.map((contact: Contact) => (
          <li key={contact.id} className="list-items__item">
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>

      <div className="list-items__wide-divider"></div>
    </div>
  );
};
