import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

interface ButtonLinkComponentProps {
  name: string;
  url: string;
}

const ButtonLinkComponent: React.FC<ButtonLinkComponentProps> = ({
  name,
  url,
}) => {
  return (
    <Button href={url} className="bg-black w-[50%]">
      {name}
      <FaGithub className="ml-2 mt-1"></FaGithub>
    </Button>
  );
};

export default ButtonLinkComponent;
