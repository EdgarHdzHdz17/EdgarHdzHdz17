import React from "react";

interface CardSkillProps {
  title: string;
  skills: { skill: string; icon: string }[];
}

const CardSkillComponent: React.FC<CardSkillProps> = ({ title, skills }) => {
  return (
    <div className="card-surface flex h-full flex-col gap-3 p-4 sm:p-5">
      <h3 className="border-b border-mist-100 pb-3 text-center text-base font-semibold text-ink dark:border-cyan-200/10 dark:text-slate-100">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-3 rounded-xl bg-mist-50/90 px-3 py-2 text-sm text-ink-muted dark:bg-white/5 dark:text-slate-300"
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
