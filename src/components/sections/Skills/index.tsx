import React from "react";
import data from "../../../datas/dataskill/data.json";

const skills = data.flatMap((group) => group.skills);

const Skills: React.FC = () => {
  return (
    <section aria-label="Skills">
      <h2 className="text-sm font-medium text-ink dark:text-stone-100">
        Tecnologías que uso
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill.skill}
            className="rounded-full border border-mist-200 px-3.5 py-1.5 text-sm text-ink-muted dark:border-white/15 dark:text-stone-300"
          >
            {skill.skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
