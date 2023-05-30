import {ButtonTypes, type Contact} from '../../data/types.ts';
import {ButtonWithText} from '../Common/ButtonWithText.tsx';

import '../../styles/ContactCardsContainer/ContactCardStatic.css';

type ContactCardStaticProps = {
  contact: Contact;
  onEditBtn: () => void;
}

export const ContactCardStatic = ({contact, onEditBtn}: ContactCardStaticProps) => {
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
          <ButtonWithText onClick={onEditBtn}
                          type={ButtonTypes.button}
                          className="text-btn card-item_space-around"
                          title="Edit contact">
            Edit
          </ButtonWithText>
        </div>
      </div>
    </div>);
};
