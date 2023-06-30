type IButtonVariant = 'contained' | 'text' | 'outlined';

export interface ICancelButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  className?: string;
  variant?: IButtonVariant;
  disabled?: boolean;
}
