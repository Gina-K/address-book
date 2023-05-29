import '../../styles/Common/TextButton.css';

type Props = {
  onEdit?: any;
  children: string;
  type: any;
}

export const TextButton = ({onEdit, children, type}: Props) => {
  return (
    <button type={type} onClick={onEdit} className="text-btn">{children}</button>
  );
};