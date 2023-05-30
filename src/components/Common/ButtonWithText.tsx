import type {MouseEventHandler} from 'react';

import type {ButtonTypes} from '../../data/types.ts';

import '../../styles/Common/TextButton.css';
import '../../styles/Common/LinkButton.css';

type ButtonWithTextProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: string;
  type: ButtonTypes;
  className: string;
  title: string;
}

export const ButtonWithText = ({onClick, children, type, className, title}: ButtonWithTextProps) => {
  return (
    <button type={type} onClick={onClick} className={className} title={title}>{children}</button>
  );
};
