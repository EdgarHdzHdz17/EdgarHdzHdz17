import ButtonLinkComponent from "../ButtonLink";
import { FaGithub } from "react-icons/fa";

const GitHubStyle = {
  color: "#fff",
  backgroundColor: "#333",
};

interface CardProjectComponentProps {
  title: string;
  description: string;
  skills: { skill: string; icon: string }[];
  image: string;
  link: string;
}

const CardProjectComponent: React.FC<CardProjectComponentProps> = ({
  title,
  description,
  skills,
  image,
  link,
}) => {
  return (
    <div className="flex flex-col justify-center space-y-4 border-gray-200 border-2 rounded-lg p-1">
      <div className="grid gap-2">
        <img
          src={image}
          width="550"
          height="310"
          alt={title}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <p className="text-muted-foreground">{description}</p>
        <div className="flex gap-2 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1">
              <img
                src={skill.icon}
                alt={skill.skill}
                className="w-8 h-8 rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <ButtonLinkComponent
            name="GitHub"
            url={link}
            style={GitHubStyle}
            icon={<FaGithub className="ml-2 mt-1" />}
          />
        </div>
      </div>
    </div>
  );
};

export default CardProjectComponent;
