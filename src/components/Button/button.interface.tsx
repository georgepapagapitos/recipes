export interface ButtonProps {
  buttonType?: 'primary' | 'secondary';
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
};
