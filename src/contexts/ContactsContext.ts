import React from 'react';
import type {ContactsContextType} from '../data/types.ts';

export const ContactsContext = React.createContext<ContactsContextType | undefined>(undefined);