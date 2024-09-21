import data from "../../../datas/dataprojects/data.json";
import CardProjectComponent from "../../CardProject/index";

const Portfolio = () => {
  return (
    <section className="w-full p-5 flex justify-center items-center max-sm:px-5">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Portfolio
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-sm:text-justify">
            A lo largo de mi aprendizaje y experiencia, he desarrollado varios
            sitios web y aplicaciones móviles utilizando herramientas como
            Bootstrap, React, Tailwind y React Native.
          </p>
        </div>
        <div className="w-[80%] grid items-center gap-6 lg:grid-cols-4 lg:gap-">
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
    </section>
  );
};

export default Portfolio;
