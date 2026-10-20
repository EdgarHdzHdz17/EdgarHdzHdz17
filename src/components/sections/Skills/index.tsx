import React from "react";
import CardCourseComponent from "../../CardCourse";
import coursesData from "../../../datas/datacourses/data.json";

const Skills: React.FC = () => {
  return (
    <section className="mx-auto w-full border-b border-mist-200/70 px-5 py-12 sm:px-6 lg:w-[90%] lg:px-0 lg:py-16 dark:border-white/5">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl dark:text-stone-100">
        Desarrollo profesional
      </h2>
      <div className="mt-6 grid gap-4">
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
    </section>
  );
};

export default Skills;
