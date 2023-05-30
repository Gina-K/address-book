import React, {useState} from 'react';

import {INITIAL_CONTACT} from '../../data/constants.ts';
import type {Contact} from '../../data/types.ts';
import {useDeleteContact} from '../../hooks/useDeleteContact.ts';
import {useSaveContact} from '../../hooks/useSaveContact.ts';
import {DeleteButton} from '../Common/DeleteButton.tsx';
import {ContactCardForm} from './ContactCardForm.tsx';
import {ContactCardStatic} from './ContactCardStatic.tsx';

type Props = {
  contact: Contact;
  forceEditing: boolean;
  isAdding: boolean;
  setIsAdding: any;
  hasActiveCard: boolean;
  setHasActiveCard: any;
}

export const ContactCardWrapper = ({
  contact,
  forceEditing,
  isAdding,
  setIsAdding,
  hasActiveCard,
  setHasActiveCard,
}: Props) => {
  const deleteContact = useDeleteContact();
  const {saveEditedContact, saveAddedContact} = useSaveContact();

  const [isEditing, setIsEditing] = useState<boolean>(forceEditing || false);
  const [currentContact, setCurrentContact] = useState<Contact>(INITIAL_CONTACT);

  const handleEdit = () => {
    if (hasActiveCard) {
      return;
    }

    setIsEditing(true);
    setHasActiveCard(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsAdding(false);
    setHasActiveCard(false);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    setHasActiveCard(false);
    isAdding ? saveAddedContact(currentContact) : saveEditedContact(currentContact);
    setIsAdding(false);
    setHasActiveCard(false);
  };

  const handleDelete = () => {
    deleteContact(contact.id);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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