import {Link} from 'react-router-dom';
import {ContactList} from '../components/ContactList.tsx';

export const ContactsViewer = () => {
  return (
    <>
      <p>View Contact List</p>
      <Link to="/">Edit</Link>
      <ContactList />
    </>
  );
};