import {Link} from 'react-router-dom';

export const ContactsManager = () => {
  return (
    <>
      <p>Add, delete, and edit contacts</p>
      <Link to="contacts-list">Alternative View</Link>
    </>
  );
};