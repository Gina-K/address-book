import '../../styles/Common/Input.css';

type Props = {
  name: string;
  type: string;
  value: string;
  isRequired: boolean;
  minLength?: any;
  maxLength?: any;
  pattern?: string;
  children: any;
  placeholder: string;
  onChange: (value: string) => void;
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