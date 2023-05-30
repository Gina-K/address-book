import type {ChangeEventHandler} from 'react';

import '../../styles/Common/Input.css';
import {InputTypes} from '../../data/types.ts';

type Props = {
  name: string;
  type: InputTypes;
  value: string;
  isRequired: boolean;
  minLength?: any;
  maxLength?: any;
  pattern?: string;
  children: any;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const ValidatedTextInput = ({
  name,
  type,
  value,
  isRequired,
  minLength,
  maxLength,
  pattern,
  children,
  placeholder,
  onChange
}: Props) => {
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {children} {isRequired && <span aria-label="required" className="input__required">*</span>}
      </label>
      <input id={name}
             type={type}
             name={name}
             value={value}
             required={isRequired}
             onChange={onChange}
             minLength={minLength}
             maxLength={maxLength}
             pattern={pattern}
             placeholder={placeholder}
             className="input__input"
      />
    </div>
  );
};