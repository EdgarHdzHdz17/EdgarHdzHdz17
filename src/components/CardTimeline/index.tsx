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
    <article className="card-surface group flex h-full flex-col gap-4 p-6 sm:p-7">
      <div className="h-1 w-10 rounded-full bg-gradient-to-r from-accent to-indigo-500 transition-all group-hover:w-14" />
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        {role}
      </h3>
      <div className="flex flex-col gap-2 text-sm text-slate-600">
        <p className="flex items-center gap-2">
          <FaRegBuilding className="h-4 w-4 shrink-0 text-slate-400" />
          <span>{company}</span>
        </p>
        <p className="flex items-center gap-2">
          <IoTimeOutline className="h-4 w-4 shrink-0 text-slate-400" />
          <span>{date}</span>
        </p>
      </div>
      <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
        {description}
      </p>
    </article>
  );
};

export default CardTimeLineComponent;
