import React from "react";
import CardSkillComponent from "../../CardSkill";
import CardCourseComponent from "../../CardCourse";
import skillsData from "../../../datas/dataskill/data.json";
import coursesData from "../../../datas/datacourses/data.json";

const Skills: React.FC = () => {
  return (
    <section className="mx-auto w-full border-b border-mist-200/70 px-5 py-12 sm:px-6 lg:w-[90%] lg:px-0 lg:py-16 dark:border-white/5">
      <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="flex h-full flex-col">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl dark:text-stone-100">
            Reconocimientos
          </h2>
          <div className="mt-6 grid flex-1 auto-rows-fr gap-4">
            {coursesData.map((course, index) => (
              <CardCourseComponent
                key={index}
                title={course.title}
                date={course.date}
                company={course.company}
                description={course.description}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>
        </div>
        <div className="flex h-full flex-col">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl dark:text-stone-100">
            Skills
          </h2>
          <div className="mt-6 grid flex-1 auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
            {skillsData.map((skill, index) => (
              <CardSkillComponent
                key={index}
                title={skill.title}
                skills={skill.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
