import React from "react";
import CardSkillComponent from "../../CardSkill";
import data from "../../../datas/dataskill/data.json";

const Skills: React.FC = () => {
  return (
    <div className="grid gap-4 p-5">
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
  );
};

export default Skills;
