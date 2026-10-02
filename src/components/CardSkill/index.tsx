import React from "react";

interface CardSkillProps {
  title: string;
  skills: { skill: string; icon: string }[];
}

const CardSkillComponent: React.FC<CardSkillProps> = ({ title, skills }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 lg:items-start">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle dark:text-stone-500">
        {title}
      </h3>
      <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="inline-flex items-center gap-2 rounded-full border border-mist-200/80 bg-mist-50/80 py-1 pl-1.5 pr-3 text-sm text-ink-muted dark:border-white/10 dark:bg-white/5 dark:text-stone-300"
          >
            <img
              className="h-6 w-6 shrink-0 rounded-full bg-white/90 object-contain p-0.5 dark:bg-white"
              src={skill.icon}
              alt=""
            />
            <span className="font-medium">{skill.skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSkillComponent;
