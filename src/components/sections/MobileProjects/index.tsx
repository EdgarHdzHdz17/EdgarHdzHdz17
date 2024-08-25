import data from "../../../datas/datamobile/data.json";
import CardProjectComponent from "../../CardProject/index";

const MobileProjects = () => {
  return (
    <section className="w-full py-12 md:py-10 lg:py-10 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Proyectos Moviles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tambien cuento con experiencia en desarrollo móvil con React
              Native. Estos proyectos me han permitido aplicar conceptos básicos
              como componentes, navegación y manejo de estado, mientras trabajo
              en la creación de interfaces de usuario interactivas y
              funcionales. En estas aplicaciones, he experimentado con
              diferentes componentes y funcionalidades, como listas,
              formularios, navegación entre pantallas y la integración de APIs
              externas.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
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
        </div>
      </div>
    </section>
  );
};

export default MobileProjects;
