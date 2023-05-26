import {PLACEHOLDER_CONTACTS} from '../data/constants.ts';
import {Contact} from '../data/types.ts';
import {ContactListItem} from './ContactListItem.tsx';

export const ContactList = () => {
  const contacts = PLACEHOLDER_CONTACTS;

  return (
    <>
      {contacts.map((contact: Contact) => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </>
  );
};