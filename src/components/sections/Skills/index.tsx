import React from "react";
import CardSkillComponent from "../../CardSkill";
import data from "../../../datas/dataskill/data.json";

const Skills: React.FC = () => {
  return (
    <section aria-label="Skills">
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
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
