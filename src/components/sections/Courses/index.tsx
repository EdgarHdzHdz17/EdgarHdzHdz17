import CardCourseComponent from "../../CardCourse";
import data from "../../../datas/datacourses/data.json";

const Courses = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reconocimientos
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Algunos de los logros y premios que hemos recibido a lo largo de
              los años.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
      </div>
    </section>
  );
};

export default Courses;
