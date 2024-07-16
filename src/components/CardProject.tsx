import { Card } from "flowbite-react";
import ButtonGitHub from "./ButtonGitHub";
import TagSkill from "./TagSkill";
import {
  Bootstrap,
  Css,
  Html,
  Javascript,
  ReactIcon,
  Tailwind,
  ViteJS,
} from "./icons";

interface PropertiesCard {
  image?: string;
  title?: string;
  description?: string;
  tagHTML?: boolean;
  tagCSS?: boolean;
  tagJS?: boolean;
  tagReact?: boolean;
  tagViteJS?: boolean;
  tagBoostrap?: boolean;
  tagTailwind?: boolean;
  tagGit?: boolean;
  tagGitHub?: boolean;
  tagFigma?: boolean;
  tagNotion?: boolean;
  url?: string;
}

const CardProject = (props: PropertiesCard) => {
  return (
    <Card
      className="max-w-sm bg-transparent hover:bg-neutral-700 border-transparent"
      imgAlt="Project"
      imgSrc={props.image}
    >
      <h5 className="text-2xl font-bold text-white ">{props.title}</h5>
      <p className="font-normal text-white text-justify">{props.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {props.tagHTML && <TagSkill skill={Html} />}
        {props.tagCSS && <TagSkill skill={Css} />}
        {props.tagJS && <TagSkill skill={Javascript} />}
        {props.tagReact && <TagSkill skill={ReactIcon} />}
        {props.tagViteJS && <TagSkill skill={ViteJS} />}
        {props.tagBoostrap && <TagSkill skill={Bootstrap} />}
        {props.tagTailwind && <TagSkill skill={Tailwind} />}
      </div>
      <div className="flex justify-center">
        <ButtonGitHub url={props.url} />
      </div>
    </Card>
  );
};

export default CardProject;
