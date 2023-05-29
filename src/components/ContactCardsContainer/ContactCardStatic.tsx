import type {Contact} from '../../data/types.ts';

import '../../styles/ContactCardsContainer/ContactCardStatic.css';

type Props = {
  contact: Contact;
  onEdit: any;
}

export const ContactCardStatic = ({contact, onEdit}: Props) => {
  const {firstName, lastName, email, country} = contact;

  return (
    <div className="card-item__static">
      <div>
        <div className="static__row">
            <span>{firstName} </span>
            <span>{lastName}</span>
        </div>

        <div className="static__row">
          <span>{email}</span>
        </div>

        <div className="static__row">
          <span>{country}</span>
        </div>

        <div className="card-item__button_align_right">
          <button type="button" onClick={onEdit}>Edit</button>
        </div>
      </div>
    </div>);
};