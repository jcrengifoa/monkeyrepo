import { ComponentType } from 'react';

interface IconProps {
  className?: string;
}

export interface IActionItemProps {
  title?: string;
  onClick: any;
  disabled?: boolean;
  Icon: ComponentType<IconProps>;
}
