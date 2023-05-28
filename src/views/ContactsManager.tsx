import {Link} from 'react-router-dom';
import {ContactCardsContainer} from '../components/ContactCardsContainer/ContactCardsContainer.tsx';

export const ContactsManager = () => {
  return (
    <>
      <p>Add, delete, and edit contacts</p>
      <Link to="contacts-list">Alternative View</Link>
      <ContactCardsContainer />
    </>
  );
};