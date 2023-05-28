type Props = {
  name: string;
  type: string;
  value: string;
  isRequired: boolean;
  minLength?: any;
  maxLength?: any;
  pattern?: string;
  children: any;
  onChange: (value: string) => void;
}

export const ValidatedTextInput = ({name, type, value, isRequired, minLength, maxLength, pattern, children, onChange}: Props) => {
  return (
    <div>
      <label htmlFor={name}>{children} {isRequired && <span aria-label="required">*</span>}</label>
      <input id={name}
             type={type}
             name={name}
             value={value}
             required={isRequired}
             onChange={onChange}
             minLength={minLength}
             maxLength={maxLength}
             pattern={pattern}
      />
    </div>
  );
};