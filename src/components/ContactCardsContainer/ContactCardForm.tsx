import {getNames} from 'country-list';
import {useEffect} from 'react';
import {EMAIL_REGEX} from '../../data/constants.ts';

import type {Contact} from '../../data/types.ts';
import {SelectInput} from '../Common/SelectInput.tsx';
import {ValidatedTextInput} from '../Common/ValidatedTextInput.tsx';

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
    <form onSubmit={onSave} className="card-item__form">
      <div>
        <ValidatedTextInput name="firstName"
                            type="text"
                            value={firstName}
                            isRequired={true}
                            onChange={onChange}
                            minLength={2}
                            maxLength={30}
        >
          First Name
        </ValidatedTextInput>

        <ValidatedTextInput name="lastName"
                            type="text"
                            value={lastName}
                            isRequired={true}
                            onChange={onChange}
                            minLength={2}
                            maxLength={30}
        >
          Last Name
        </ValidatedTextInput>

        <ValidatedTextInput name="email"
                            type="text"
                            value={email}
                            isRequired={true}
                            onChange={onChange}
                            pattern={EMAIL_REGEX}
        >
          Email
        </ValidatedTextInput>

        <SelectInput name="country"
                     value={country}
                     possibleValues={countries}
                     isRequired={true}
                     onChange={onChange}
        >
          Country
        </SelectInput>

        <div className="card-item__button_align_right">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};