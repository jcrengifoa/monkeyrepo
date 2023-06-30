import { Button } from '@mui/material';

import cancelBtnStyle from './cancelButton.module.scss';
import { ICancelButtonProps } from './cancelButton.types';

import clsx from 'clsx';

export function CancelButton({
  children,
  handleClick,
  disabled = false,
  className = '',
  variant = 'outlined',
}: ICancelButtonProps) {
  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      variant={variant}
      className={clsx(cancelBtnStyle.cancelBtnStyle, className)}
    >
      {children}
    </Button>
  );
}

export default CancelButton;
