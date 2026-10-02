import React from "react";
import CardSkillComponent from "../../CardSkill";
import data from "../../../datas/dataskill/data.json";

const Skills: React.FC = () => {
  return (
    <section>
      <header className="mb-5">
        <p className="section-eyebrow">Stack</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink dark:text-slate-50">
          Skills
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((skill, index) => (
          <CardSkillComponent
            key={index}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
