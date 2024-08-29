import { useState } from "react";
import CardCourseComponent from "../../CardCourse";
import data from "../../../datas/datacourses/data.json";

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, data.length - itemsPerPage)
    );
  };

  return (
    <section className="w-full p-5 flex flex-col justify-center px-20 items-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Reconocimientos
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          Algunos reconocimientos y cursos que he recibido a lo largo de los
          años.
        </p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((course, index) => (
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
        <button
          onClick={handleNext}
          disabled={currentIndex >= data.length - itemsPerPage}
          className="p-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Courses;
