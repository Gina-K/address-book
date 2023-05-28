import {Link} from 'react-router-dom';
import {ContactsList} from '../components/ContactsList/ContactsList.tsx';

export const ContactsViewer = () => {
  return (
    <>
      <p>View Contact List</p>
      <Link to="/">Edit</Link>
      <ContactsList />
    </>
  );
};