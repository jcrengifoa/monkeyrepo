import { IButtonProps } from './button.types';

import buttonStyles from './button.module.scss';

function Button(props: IButtonProps) {
  return (
    <button
      className={`
      ${buttonStyles.button}
      ${props.secondary ? buttonStyles.secondary : ''}
    `}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
