import CardProject from "../components/CardProject";
import { LottieAnimationWeb } from "../components/LottieAnimation";
import { Telematica, Funkop, WeatherSphere } from "../components/images";

export default function ProjectsWeb() {
  return (
    <>
      <h1 className="text-white max-sm:text-2xl lg:text-3xl border-b-4 ">
        Proyectos Web
      </h1>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%,40%]">
        <div className=" text-white p-2 flex justify-center items-center text-justify">
          <p className="w-[70%]">
            Durante mi aprendizaje y experiencia he creado varios sitios web con
            el uso de herramientas como Boostrap, React y Tailwind que me han
            permitido aplicar conceptos básicos como componentes, estados y
            propiedades, mientras me permite practicar en el diseño, la
            estructura de las interfaces de usuario y sistemas responsivos.
            Además de practicar el consumo de API REST.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" w-[50%]">
            <LottieAnimationWeb />
          </div>
        </div>
      </div>
      {/**Proyectos Web */}
      <div className="grid my-5 max-sm:grid-cols-1 max-sm:gap-y-5 md:gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3 ">
        {/**Telematica */}
        <div className="flex justify-center">
          <CardProject
            image={Telematica}
            title={"Telematica"}
            description={
              "Página web sobre del Laboratorio Telematica para la Educación."
            }
            tagHTML
            tagCSS
            tagJS
            tagBoostrap
            url={"https://github.com/EdgarHdzHdz17/Page-Telematica-ICAT.git"}
          ></CardProject>
        </div>
        {/**Funkop */}
        <div className="flex justify-center">
          <CardProject
            image={Funkop}
            title={"Funkop"}
            description={
              "Página web de Funkop hecha con HTML, CSS y JavaScript."
            }
            tagHTML
            tagCSS
            tagJS
            url={"https://github.com/EdgarHdzHdz17/Funkop.git"}
          ></CardProject>
        </div>
        {/**WeatherSphere */}
        <div className="flex justify-center">
          <CardProject
            image={WeatherSphere}
            title={"WeatherShere"}
            description={
              "App web para ver el estado del clima usando WeatherAPI."
            }
            tagJS
            tagReact
            tagViteJS
            tagTailwind
            url={"https://github.com/EdgarHdzHdz17/WeatherSphere.git"}
          ></CardProject>
        </div>
      </div>
    </>
  );
}
