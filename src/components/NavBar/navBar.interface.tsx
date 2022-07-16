export interface NavBarProps {
  links: LinkProps[];
};

type LinkProps = {
  text: string;
  to: string;
};
