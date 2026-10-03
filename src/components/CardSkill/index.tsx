import React from "react";

interface CardSkillProps {
  title: string;
  skills: { skill: string; icon: string }[];
}

const CardSkillComponent: React.FC<CardSkillProps> = ({ title, skills }) => {
  return (
    <div className="card-surface flex h-full flex-col gap-2 p-3">
      <h3 className="border-b border-mist-100 pb-2 text-center text-sm font-semibold text-ink dark:border-white/10 dark:text-stone-100">
        {title}
      </h3>
      <ul className="flex flex-1 flex-col justify-center gap-1.5">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-2 rounded-lg bg-mist-50/90 px-2.5 py-1.5 text-xs text-ink-muted dark:bg-white/5 dark:text-stone-300"
          >
            <span className="font-medium">{skill.skill}</span>
            <img
              className="h-5 w-5 shrink-0 rounded object-contain"
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
