import type { FC } from "react";
import ButtonLinkComponent from "../ButtonLink";
import { FaGithub } from "react-icons/fa";

interface CardProjectComponentProps {
  title: string;
  description: string;
  skills: { skill: string; icon: string }[];
  image: string;
  link: string;
}

const CardProjectComponent: FC<CardProjectComponentProps> = ({
  title,
  description,
  skills,
  image,
  link,
}) => {
  return (
    <article className="group card-surface flex flex-col overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          width={640}
          height={360}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/90"
              title={skill.skill}
            >
              <img
                src={skill.icon}
                alt={skill.skill}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="pt-1">
          <ButtonLinkComponent
            name="GitHub"
            url={link}
            variant="github"
            icon={<FaGithub className="h-4 w-4" aria-hidden />}
          />
        </div>
      </div>
    </article>
  );
};

export default CardProjectComponent;
