import data from "../../../datas/datawebproject/data.json";
import CardProjectComponent from "../../CardProject/index";

const WebProjects = () => {
  return (
    <section className="w-full p-5">
      <div className="container ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Proyectos Web
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Durante mi aprendizaje y experiencia he creado varios sitios web
              con el uso de herramientas como Boostrap, React y Tailwind que me
              han permitido aplicar conceptos básicos como componentes, estados
              y propiedades, mientras me permite practicar en el diseño, la
              estructura de las interfaces de usuario y sistemas responsivos.
              Además de practicar el consumo de API REST.
            </p>
          </div>
          <div className="w-[70%] grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
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

export default WebProjects;
