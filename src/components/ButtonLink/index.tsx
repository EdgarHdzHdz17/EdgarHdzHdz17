import { Button } from "flowbite-react";

interface ButtonLinkComponentProps {
  name: string;
  url: string;
  style: React.CSSProperties;
  icon: React.ReactNode;
}

const ButtonLinkComponent: React.FC<ButtonLinkComponentProps> = ({
  name,
  url,
  style,
  icon,
}) => {
  return (
    <Button href={url} style={style}>
      {name}
      {icon}
    </Button>
  );
};

export default ButtonLinkComponent;
