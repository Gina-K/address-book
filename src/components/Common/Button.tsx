import type {ButtonTypes} from '../../data/types.ts';

import '../../styles/Common/TextButton.css';
import '../../styles/Common/LinkButton.css';

type Props = {
  onClick?: any;
  children: string;
  type: ButtonTypes;
  className: string;
}

export const Button = ({onClick, children, type, className}: Props) => {
  return (
    <button type={type} onClick={onClick} className={className}>{children}</button>
  );
};