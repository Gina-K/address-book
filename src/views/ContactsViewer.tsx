import {Link} from 'react-router-dom';

import {ContactsList} from '../components/ContactsList/ContactsList.tsx';

export const ContactsViewer = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="page-title">View Contact List</h1>
        <Link to="/" className="navigation">Edit</Link>
      </header>

      <ContactsList />
    </div>
  );
};
