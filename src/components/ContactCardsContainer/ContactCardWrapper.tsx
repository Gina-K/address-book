import React, {useState} from 'react';

import {INITIAL_CONTACT} from '../../data/constants.ts';
import type {Contact} from '../../data/types.ts';
import {useDeleteContact} from '../../hooks/useDeleteContact.ts';
import {useSaveContact} from '../../hooks/useSaveContact.ts';
import {DeleteButton} from '../Common/DeleteButton.tsx';
import {ContactCardForm} from './ContactCardForm.tsx';
import {ContactCardStatic} from './ContactCardStatic.tsx';

type ContactCardWrapperProps = {
  contact: Contact;
  forceEditing: boolean;
  isAdding: boolean;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
  hasActiveCard: boolean;
  setHasActiveCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactCardWrapper = ({
  contact,
  forceEditing,
  isAdding,
  setIsAdding,
  hasActiveCard,
  setHasActiveCard,
}: ContactCardWrapperProps) => {
  const deleteContact = useDeleteContact();
  const {saveEditedContact, saveAddedContact} = useSaveContact();

  const [isEditing, setIsEditing] = useState<boolean>(forceEditing || false);
  const [currentContact, setCurrentContact] = useState<Contact>(INITIAL_CONTACT);

  const handleEdit = (): void => {
    if (hasActiveCard) {
      return;
    }

    setIsEditing(true);
    setHasActiveCard(true);
  };

  const handleCancel = (): void => {
    setIsEditing(false);
    setIsAdding(false);
    setHasActiveCard(false);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsEditing(false);
    setHasActiveCard(false);
    isAdding ? saveAddedContact(currentContact) : saveEditedContact(currentContact);
    setIsAdding(false);
    setHasActiveCard(false);
  };

  const handleDelete = (): void => {
    deleteContact(contact.id);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentContact({
      ...currentContact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="card-item__text_align_right">
        <DeleteButton onDelete={handleDelete} />
      </div>
      {isEditing ?
        <ContactCardForm contact={contact}
                         onSaveBtn={handleSave}
                         onCancelBtn={handleCancel}
                         onContactChange={handleContactChange}
                         setCurrentContact={setCurrentContact}
                         currentContact={currentContact}
        />
        : <ContactCardStatic contact={contact} onEditBtn={handleEdit} />}
    </>
  );
};
