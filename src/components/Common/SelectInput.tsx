import type {ChangeEventHandler} from 'react';

import '../../styles/Common/Input.css';

type Props = {
  name: string;
  value: string;
  possibleValues: string[];
  isRequired: boolean;
  children: any;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectInput = ({name, value, possibleValues, isRequired, children, onChange}: Props) => {
  return (
    <div className="input">
      <label htmlFor="country" className="input__label">
        {children}{isRequired && <span aria-label="required" className="input__required">*</span>}
      </label>
      <select id={name} name={name} value={value} required={isRequired} onChange={onChange} className="input__input">
        <option value="">Please select a {name}</option>
        {possibleValues.map((val: string) => <option key={val} value={val}>{val}</option>)}
      </select>
    </div>
  );
};