import React from "react";
import CardCourseComponent from "../../CardCourse";
import coursesData from "../../../datas/datacourses/data.json";

const Skills: React.FC = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="grid flex-1 gap-4">
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
  );
};

export default Skills;
