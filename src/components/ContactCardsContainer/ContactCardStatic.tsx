import type {Contact} from '../../data/types.ts';

import '../../styles/ContactCardsContainer/ContactCardStatic.css';
import {Button} from '../Common/Button.tsx';

type Props = {
  contact: Contact;
  onEdit: any;
}

export const ContactCardStatic = ({contact, onEdit}: Props) => {
  const {firstName, lastName, email, country} = contact;

  return (
    <div className="card-item__static card-item_move-up">
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

        <div className="card-item__text_align_right">
          <Button onClick={onEdit} type="button" className="text-btn card-item_space-around">Edit</Button>
        </div>
      </div>
    </div>);
};