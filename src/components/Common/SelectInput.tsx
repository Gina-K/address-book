type Props = {
  name: string;
  value: string;
  possibleValues: string[];
  isRequired: boolean;
  children: any;
  onChange: (value: string) => void;
}

export const SelectInput = ({name, value, possibleValues, isRequired, children, onChange}: Props) => {
  return (
    <div>
      <label htmlFor="country">{children}{isRequired && <span aria-label="required">*</span>}</label>
      <select id={name} name={name} value={value} required={isRequired} onChange={onChange}>
        <option value="">Please select a {name}</option>
        {possibleValues.map((val: string) => <option key={val} value={val}>{val}</option>)}
      </select>
    </div>
  );
};