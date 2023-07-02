import { IconButton, Tooltip } from '@mui/material';
import { black, blue } from '@mercedes-benz/mui5-theme';

import { IActionItemProps } from './actionItem.types';

import actionItemStyles from './actionItem.module.scss';

export function ActionItem({
  title = '',
  onClick,
  Icon,
  disabled = false,
}: IActionItemProps) {
  return (
    <Tooltip title={title}>
      <span className={actionItemStyles.pointer}>
        <IconButton
          className={actionItemStyles.iconButton}
          disabled={disabled}
          disableRipple
          onClick={onClick}
          style={
            {
              '--color': black,
              '--hover-color': blue[45],
            } as React.CSSProperties
          }
        >
          <Icon className={actionItemStyles.icon} />
        </IconButton>
      </span>
    </Tooltip>
  );
}
