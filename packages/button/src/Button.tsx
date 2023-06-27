import { IButtonProps } from './button.types';

import buttonStyles from './button.module.scss';

function Button(props: IButtonProps) {
  return (
    <button
      className={`
        ${buttonStyles.button}
        ${props.secondary ? buttonStyles.secondary : ''}
        ${props.secondary ? buttonStyles.disabled : ''}
      `}
      disabled={!!props.disabled}
      onClick={props.onClick}
    >
      {props.label} Pink
    </button>
  );
}

export default Button;
