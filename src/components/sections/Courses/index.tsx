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
    <section className="w-full p-5 flex flex-col justify-center px-20 items-center max-sm:px-5">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Reconocimientos
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center max-sm:text-justify">
          A lo largo de los años, he tenido la oportunidad de recibir diversos
          reconocimientos y completar cursos que han enriquecido mi formación
          profesional.
        </p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 bg-gray-300 rounded disabled:opacity-50 max-sm:hidden"
        >
          Ant
        </button>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data
            .slice(
              window.innerWidth <= 640 ? 0 : currentIndex,
              window.innerWidth <= 640
                ? data.length
                : currentIndex + itemsPerPage
            )
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
          className="p-2 bg-gray-300 rounded disabled:opacity-50 max-sm:hidden"
        >
          Sig
        </button>
      </div>
    </section>
  );
};

export default Courses;
