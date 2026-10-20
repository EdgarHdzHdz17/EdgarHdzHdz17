import data from "../../../datas/dataprojects/data.json";
import CardProjectComponent from "../../CardProject/index";

const Portfolio = () => {
  return (
    <section
      id="proyectos"
      className="section-shell scroll-mt-8 border-b border-mist-200/70 dark:border-white/5"
    >
      <header className="mb-10 mx-auto max-w-2xl text-center">
        <h2 className="section-title mt-0">Proyectos</h2>
      </header>
      <div className="grid gap-8 sm:grid-cols-2">
        {data.map((project, index) => (
          <CardProjectComponent
            key={index}
            title={project.title}
            skills={project.skills}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
