import {PLACEHOLDER_CONTACTS} from '../data/constants.ts';
import type {Contact} from '../data/types.ts';
import {ContactCard} from './ContactCard.tsx';

export const ContactCardsContainer = () => {
  const contacts = PLACEHOLDER_CONTACTS;

  return (
    <>
      {contacts.map((contact: Contact) => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </>
  );
};