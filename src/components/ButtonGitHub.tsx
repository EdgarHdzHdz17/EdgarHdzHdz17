import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

type PropsButton = {
  url?: string;
};

export default function ButtonGitHub(props: PropsButton) {
  return (
    <div className="bg-black rounded-md">
      <Button href={props.url}>
        GitHub<FaGithub className="ml-2 mt-1"></FaGithub>
      </Button>
    </div>
  );
}
