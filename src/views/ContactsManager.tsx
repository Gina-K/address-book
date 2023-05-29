import {Link} from 'react-router-dom';
import {ContactCardsContainer} from '../components/ContactCardsContainer/ContactCardsContainer.tsx';

export const ContactsManager = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="page-title">Add, delete, edit contacts</h1>
        <Link to="contacts-list" className="navigation">Alternative View</Link>
      </header>
      <ContactCardsContainer />
    </div>
  );
};