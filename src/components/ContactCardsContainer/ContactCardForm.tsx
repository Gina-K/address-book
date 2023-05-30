import {getNames} from 'country-list';
import {useEffect} from 'react';

import {EMAIL_REGEX} from '../../data/constants.ts';
import {ButtonTypes, type Contact, InputTypes} from '../../data/types.ts';

import '../../styles/ContactCardsContainer/ContactCardForm.css';
import {Button} from '../Common/Button.tsx';
import {SelectInput} from '../Common/SelectInput.tsx';
import {ValidatedTextInput} from '../Common/ValidatedTextInput.tsx';

type Props = {
  contact: Contact;
  onSaveBtn: any;
  onCancelBtn: any;
  onContactChange: any;
  setCurrentContact: any;
  currentContact: any;
}

export const ContactCardForm = ({
  contact: storedContact,
  onSaveBtn,
  onCancelBtn,
  onContactChange,
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
    <form onSubmit={onSaveBtn} className="card-item__form card-item_move-up">
      <div className="card-item__row-container form__name-container">
        <ValidatedTextInput name="firstName"
                            type={InputTypes.text}
                            value={firstName}
                            isRequired={true}
                            onChange={onContactChange}
                            minLength={2}
                            maxLength={30}
                            placeholder="First Name"
        >
          First Name
        </ValidatedTextInput>

        <ValidatedTextInput name="lastName"
                            type={InputTypes.text}
                            value={lastName}
                            isRequired={true}
                            onChange={onContactChange}
                            minLength={2}
                            maxLength={30}
                            placeholder="Last Name"
        >
          Last Name
        </ValidatedTextInput>
      </div>
      <div className="card-item__row-container">
        <ValidatedTextInput name="email"
                            type={InputTypes.text}
                            value={email}
                            isRequired={true}
                            onChange={onContactChange}
                            pattern={EMAIL_REGEX}
                            placeholder="example-of@mail.com"
        >
          Email
        </ValidatedTextInput>
      </div>

      <div className="card-item__row-container">
        <SelectInput name="country"
                     value={country}
                     possibleValues={countries}
                     isRequired={true}
                     onChange={onContactChange}
        >
          Country
        </SelectInput>
      </div>

      <div className="card-item__row-container card-item__text_align_right">
        <Button type={ButtonTypes.button} onClick={onCancelBtn} className="link-btn card-item_space-around">Cancel</Button>
        <Button type={ButtonTypes.submit} className="text-btn card-item_space-around">Save</Button>
      </div>
    </form>
  );
};