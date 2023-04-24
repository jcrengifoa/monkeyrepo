import React from 'react';

import { IButtonProps } from './button.types';

function Button(props: IButtonProps) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

export default Button;
