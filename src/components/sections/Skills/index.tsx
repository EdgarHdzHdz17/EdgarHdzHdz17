import React from "react";
import CardSkillComponent from "../../CardSkill";
import data from "../../../datas/dataskill/data.json";

const Skills: React.FC = () => {
  return (
    <section className="w-full lg:p-20">
      <div className="grid gap-4">
        <h2 className="text-2xl font-semibold">Habilidades Técnicas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data.map((skill, index) => (
            <CardSkillComponent
              key={index}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
