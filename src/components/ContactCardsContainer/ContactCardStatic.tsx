import type {Contact} from '../../data/types.ts';

type Props = {
  contact: Contact;
  onEdit: any;
}

export const ContactCardStatic = ({contact, onEdit}: Props) => {
  const {firstName, lastName, email, country} = contact;

  return (
    <div className="card-item__static">
      <div>
        <div>
          <span>{firstName}</span>
        </div>

        <div>
          <span>{lastName}</span>
        </div>

        <div>
          <span>{email}</span>
        </div>

        <div>
          <span>{country}</span>
        </div>

        <div className="card-item__button_align_right">
          <button type="button" onClick={onEdit}>Edit</button>
        </div>
      </div>
    </div>);
};