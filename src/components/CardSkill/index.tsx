import React from "react";

interface CardProjectComponent {
  title: string;
  skills: { skill: string; icon: string }[];
}

const CardSkillComponent: React.FC<CardProjectComponent> = ({
  title,
  skills,
}) => {
  return (
    <div className="bg-muted rounded-md p-4 flex flex-col gap-2 bg-gray-100">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <ul className="text-muted-foreground space-y-1">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-row items-center justify-between"
          >
            {skill.skill}
            <img
              className="w-8 h-8 rounded-md"
              src={skill.icon}
              alt={skill.skill}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSkillComponent;
