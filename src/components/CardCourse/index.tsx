import React from "react";
import ButtonLinkComponent from "../ButtonLink";
import { FaGithub } from "react-icons/fa";

interface CardCourseComponentProps {
  title: string;
  date: string;
  company: string;
  description: string;
  image: string;
  link: string;
}

const CardCourseComponent: React.FC<CardCourseComponentProps> = ({
  title,
  date,
  company,
  description,
  image,
  link,
}) => {
  return (
    <article className="card-surface flex h-full flex-col gap-4 overflow-hidden p-3 sm:flex-row sm:items-center">
      <div className="flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f6f3ee] sm:h-24 sm:w-32">
        <img
          src={image}
          alt=""
          width={400}
          height={300}
          className="max-h-full w-full object-contain"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="text-base font-semibold tracking-tight text-ink dark:text-stone-100">
          {title}
        </h3>
        <p className="text-xs tracking-wide text-stone-500">
          {company} · {date}
        </p>
        <p className="text-pretty text-sm leading-relaxed text-ink-muted dark:text-stone-400">
          {description}
        </p>
        <div className="mt-auto pt-2">
          <ButtonLinkComponent
            name="Ver"
            url={link}
            variant="outline"
            icon={<FaGithub className="h-3.5 w-3.5" aria-hidden />}
          />
        </div>
      </div>
    </article>
  );
};

export default CardCourseComponent;
