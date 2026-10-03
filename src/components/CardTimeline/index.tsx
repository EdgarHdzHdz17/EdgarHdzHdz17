import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

interface CardTimeLineProps {
  role: string;
  company: string;
  date: string;
  description: string;
}

const CardTimeLineComponent: React.FC<CardTimeLineProps> = ({
  role,
  company,
  date,
  description,
}) => {
  return (
    <article className="card-surface group flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="h-px w-8 bg-white/15 transition-all group-hover:w-12" />
      <h3 className="text-lg font-semibold tracking-tight text-stone-300">
        {role}
      </h3>
      <div className="flex flex-col gap-2 text-sm text-ink-muted dark:text-stone-400">
        <p className="flex items-center gap-2">
          <FaRegBuilding className="h-4 w-4 shrink-0 text-accent dark:text-accent-soft" />
          <span>{company}</span>
        </p>
        <p className="flex items-center gap-2">
          <IoTimeOutline className="h-4 w-4 shrink-0 text-accent dark:text-accent-soft" />
          <span>{date}</span>
        </p>
      </div>
      <p className="text-pretty text-sm leading-relaxed text-ink-muted sm:text-base dark:text-stone-400">
        {description}
      </p>
    </article>
  );
};

export default CardTimeLineComponent;
