import React from "react";
import CardSkillComponent from "../../CardSkill";
import data from "../../../datas/dataskill/data.json";

const Skills: React.FC = () => {
  return (
    <section className="w-full lg:px-20 py-5 max-sm:px-5">
      <div className="grid gap-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
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
