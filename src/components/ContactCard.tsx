import {Contact} from '../data/types.ts';

type Props = {
  contact: Contact;
}

export const ContactCard = ({contact}: Props) => {
  const {firstName, lastName, email, country} = contact;
  // const isEditing = false;
  const isEditing = true;
  const visibility = isEditing ? 'visible' : 'hidden';

  return (
    <>
      <div>
        <label htmlFor="firstName" style={{visibility}}>First Name: <span aria-label="required">*</span></label>
        <input id="firstName" type="text" name="firstName" value={firstName} required disabled={!isEditing}/>
      </div>

      <div>
        <label htmlFor="lastName" style={{visibility}}>Last Name: <span aria-label="required">*</span></label>
        <input id="lastName" type="text" name="lastName" value={lastName} required disabled={!isEditing}/>
      </div>

      <div>
        <label htmlFor="email" style={{visibility}}>Email: <span aria-label="required">*</span></label>
        <input id="email" type="text" name="email" value={email} required disabled={!isEditing}/>
      </div>

      <div>
        <label htmlFor="country" style={{visibility}}>Country: <span aria-label="required">*</span></label>
        <select id="country" name="country" value={country} required disabled={!isEditing}>
          <option value="">Please choose a country</option>
          <option value={country}>{country}</option>
        </select>
      </div>
    </>
  );
};