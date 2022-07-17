export interface ButtonProps {
  buttonType?: 'primary' | 'secondary';
  text?: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onClick: () => void;
};
