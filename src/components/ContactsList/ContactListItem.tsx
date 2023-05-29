import type {Contact} from '../../data/types.ts';

import '../../styles/ContactsList/ContactListItem.css';

type Props = {
  contact: Contact;
}

export const ContactListItem = ({contact}: Props) => {
  const {firstName, lastName, email, country} = contact;

  return (
    <div className="contact">
      <div className="contact__parameter">
        <span className="contact__parameter__name">Name: </span>
        <span className="contact__parameter__value">{`${firstName} ${lastName}`}</span>
      </div>

      <div className="contact__parameter">
        <span className="contact__parameter__name">E-mail: </span>
        <span className="contact__parameter__value">{email}</span>
      </div>

      <div className="contact__parameter">
        <span className="contact__parameter__name">Country: </span>
        <span className="contact__parameter__value">{country}</span>
      </div>
    </div>
  );
};