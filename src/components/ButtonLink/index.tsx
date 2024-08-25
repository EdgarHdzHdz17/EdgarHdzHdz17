import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

interface ButtonLinkComponentProps {
  name: string;
  url: string;
  style: React.CSSProperties;
}

const ButtonLinkComponent: React.FC<ButtonLinkComponentProps> = ({
  name,
  url,
  style,
}) => {
  return (
    <Button href={url} style={style}>
      {name}
      <FaGithub className="ml-2 mt-1"></FaGithub>
    </Button>
  );
};

export default ButtonLinkComponent;
