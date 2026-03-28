import data from "../../../datas/dataprojects/data.json";
import CardProjectComponent from "../../CardProject/index";

const Portfolio = () => {
  return (
    <section className="section-shell border-b border-slate-200/60 bg-slate-50/50">
      <header className="mb-10 mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">Proyectos</p>
        <h2 className="section-title">Portfolio</h2>
        <p className="section-desc mx-auto text-pretty">
          Selección de trabajos recientes: web con Bootstrap y aplicación móvil
          con React Native y Expo.
        </p>
      </header>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
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
