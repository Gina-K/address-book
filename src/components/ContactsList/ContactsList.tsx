import {Contact} from '../../data/types.ts';
import {useContacts} from '../../hooks/useContacts.ts';
import {ContactListItem} from './ContactListItem.tsx';

export const ContactsList = () => {
  const contacts = useContacts();

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