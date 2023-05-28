import {useState} from 'react';
import {Contact} from '../../data/types.ts';
import {useDeleteContact} from '../../hooks/useDeleteContact.ts';
import {ContactCardForm} from './ContactCardForm.tsx';
import {ContactCardStatic} from './ContactCardStatic.tsx';

type Props = {
  contact: Contact;
  onSubmit: any;
  onChange: any;
  setCurrentContact: any;
  currentContact: any;
  forceEditing: boolean;
  setIsAdding: any;
  hasActiveCard: boolean;
  setHasActiveCard: any;
}

export const ContactCardWrapper = ({
  contact,
  onSubmit,
  onChange,
  setCurrentContact,
  currentContact,
  forceEditing,
  setIsAdding,
  hasActiveCard,
  setHasActiveCard,
}: Props) => {
  const handleDeleteContact = useDeleteContact();

  const [isEditing, setIsEditing] = useState(forceEditing || false);

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

  const handleSave = (e) => {
    setIsEditing(false);
    setHasActiveCard(false);
    onSubmit(e);
  };

  const handleDelete = () => {
    handleDeleteContact(contact.id);
  };

  return (
    <>
      <button type="button" onClick={handleDelete}>Delete</button>
      {isEditing ?
        <ContactCardForm contact={contact}
                         onSave={handleSave}
                         onCancel={handleCancel}
                         onChange={onChange}
                         setCurrentContact={setCurrentContact}
                         currentContact={currentContact}
        />
        : <ContactCardStatic contact={contact} onEdit={handleEdit} />}
    </>
  );
};