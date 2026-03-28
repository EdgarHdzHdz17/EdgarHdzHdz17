import CardCourseComponent from "../../CardCourse";
import data from "../../../datas/datacourses/data.json";

const Courses = () => {
  return (
    <section className="section-shell bg-white pb-24">
      <header className="mb-10 mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">Formación</p>
        <h2 className="section-title">Reconocimientos</h2>
        <p className="section-desc mx-auto text-pretty">
          Certificaciones y participación en eventos que han complementado mi
          trayectoria profesional.
        </p>
      </header>
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
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
    </section>
  );
};

export default Courses;
