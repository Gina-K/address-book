export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

export interface ContactsContextType {
  contacts: Contact[];
  handleDeleteContact: (value: string) => void;
  saveEditedContact: (value: Contact) => void;
  saveAddedContact: (value: Contact) => void;
}

export enum ButtonTypes {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

export enum InputTypes {
  email = 'email',
  tel = 'tel',
  text = 'text',
  url = 'url',
}
