import React from "react";
import CardSkillComponent from "../../CardSkill";
import data from "../../../datas/dataskill/data.json";

const Skills: React.FC = () => {
  return (
    <section className="section-shell border-b border-slate-200/60 bg-white">
      <header className="mb-10 max-w-2xl">
        <p className="section-eyebrow">Stack</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-desc">
          Herramientas y tecnologías que uso en el día a día.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
