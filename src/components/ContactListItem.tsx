import type {Contact} from '../data/types.ts';

type Props = {
  contact: Contact;
}

export const ContactListItem = ({contact}: Props) => {
  const {firstName, lastName, email, country} = contact;

  return (
    <>
      <div>
        <span>Name: </span>
        <span>{`${firstName} ${lastName}`}</span>
      </div>

      <div>
        <span>E-mail: </span>
        <span>{email}</span>
      </div>

      <div>
        <span>Country: </span>
        <span>{country}</span>
      </div>
    </>
  );
};