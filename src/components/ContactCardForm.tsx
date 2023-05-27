import {getNames} from 'country-list';
import {useEffect} from 'react';

import type {Contact} from '../data/types.ts';

type Props = {
  contact: Contact;
  onSave: any;
  onCancel: any;
  onChange: any;
  setCurrentContact: any;
  currentContact: any;
}

export const ContactCardForm = ({
  contact: storedContact,
  onSave,
  onCancel,
  onChange,
  setCurrentContact,
  currentContact
}: Props) => {
  useEffect(() => {
    setCurrentContact(storedContact);
  }, []);

  const countries: string[] = getNames();
  const {
    firstName,
    lastName,
    email,
    country,
  } = currentContact;

  return (
    <form onSubmit={onSave}>
      <div>
        <div>
          <label htmlFor="firstName">First Name: <span aria-label="required">*</span></label>
          <input id="firstName" type="text" name="firstName" value={firstName} required onChange={onChange} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: <span aria-label="required">*</span></label>
          <input id="lastName" type="text" name="lastName" value={lastName} required onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">Email: <span aria-label="required">*</span></label>
          <input id="email" type="text" name="email" value={email} required onChange={onChange} />
        </div>

        <div>
          <label htmlFor="country">Country: <span aria-label="required">*</span></label>
          <select id="country" name="country" value={country} required onChange={onChange}>
            <option value="">Please choose a country</option>
            {countries.map((country: string) => <option key={country} value={country}>{country}</option>)}
          </select>
        </div>

        <div>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};