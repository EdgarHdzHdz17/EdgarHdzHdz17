import React from "react";

interface CardSkillProps {
  title: string;
  skills: { skill: string; icon: string }[];
}

const CardSkillComponent: React.FC<CardSkillProps> = ({ title, skills }) => {
  return (
    <div className="card-surface flex h-full flex-col gap-4 p-5 sm:p-6">
      <h3 className="border-b border-slate-100 pb-3 text-center text-base font-semibold text-slate-900">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-3 rounded-xl bg-slate-50/80 px-3 py-2 text-sm text-slate-700"
          >
            <span className="font-medium">{skill.skill}</span>
            <img
              className="h-8 w-8 shrink-0 rounded-lg object-contain"
              src={skill.icon}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSkillComponent;
