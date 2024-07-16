import TimeLine from "../components/TimeLine";

export default function Timeline() {
  return (
    <div>
      <h1 className="text-white max-sm:text-2xl lg:text-3xl border-b-4 ">
        Educación y Experiencia
      </h1>

      <div className="flex flex-row justify-between ">
        <TimeLine
          date={"[Agosto/2016] - [Agosto/2021]"}
          title={"Universidad Nacional Autonoma de México"}
          description="Estudié la carrera de Ingeniería en Computación en la Universidad
            Nacional Autónoma de México."
        />
        <TimeLine
          date={"[Agosto/2021] - [Diciembre/2021]"}
          title={"Instituto de Ingenería (UNAM)"}
          description=" Colaboré en la creación de sitios web utilizando HTML, CSS y
              JavaScript, con un enfoque principal en el desarrollo de sistemas
              responsivos. Mi labor se centraba en garantizar que los sitios web
              ofrecieran una experiencia óptima en una variedad de dispositivos
              y tamaños de pantalla, asegurando así su accesibilidad y
              usabilidad."
        />
        <TimeLine
          date={"[Febrero/2022] - [Diciembre/2022]"}
          title={"Instituto de Ciencias Aplicadas y Tecnología (ICAT) - UNAM"}
          description="Lideré el diseño y desarrollo del sitios web para 'Telemática para la Educación'
            utilizando Bootstrap4. Mi responsabilidad principal incluía la
            maquetación del sitio, la implementación de funcionalidades
            interactivas y la creación del sistema responsivo para diversos
            dispositivos."
        />
        <TimeLine
          date={"[Enero/2023] - [Diciembre/2023]"}
          title={"Instituto de Ciencias Aplicadas y Tecnología (ICAT) - UNAM"}
          description="Desarrolle una aplicación móvil educativa e inclusiva en REACT NATIVE 
          para sistemas IOS/Android de nombre“Educatronicapp” como proyecto para obtención de grado. "
        />
      </div>
    </div>
  );
}
