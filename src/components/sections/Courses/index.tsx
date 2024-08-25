import CardCourseComponent from "../../CardCourse";
import data from "../../../datas/datacourses/data.json";

const Courses = () => {
  return (
    <section className="w-full p-5 ">
      <div className="container">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Reconocimientos
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Algunos reconocimientos y cursos que he recibido a lo largo de los
            años.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          {data.map((course, index) => (
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
    </section>
  );
};

export default Courses;
