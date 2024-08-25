import CardTimeLineComponent from "../../CardTimeline";

const Timeline = () => {
  return (
    <div className="w-full px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative">
        <CardTimeLineComponent
          role="Intership Frontend"
          company="Instituto de Instituto de Ingenieria [UNAM]"
          date="Agosto 2021 - Diciembre 2021"
          description="Colaboré en la creación de sitios web utilizando HTML, CSS y
            JavaScript. Mi labor se centraba en garantizar que los sitios web
            ofrecieran una experiencia óptima en una variedad de dispositivos, asegurando así su accesibilidad y usabilidad."
        />
        <CardTimeLineComponent
          role="Becario"
          company="Instituto de Ciencias Aplicadas y Tecnologia [ICAT]"
          date="Febrero 2022 - Diciembre 2023"
          description="Lideré el diseño y desarrollo de sitios web utilizando Bootstrap4
            para 'Telematica para la Educacion'. Ademas desarrolle
            'Educatronicapp' utilizando Expo React Native como proyecto de
            titulacion mediante tesis."
        />
        <CardTimeLineComponent
          role="Frontend Developer"
          company="Adaption"
          date="Junio 2024 - Actualidad"
          description="Actualmente me desempeño como Frontend Developer en Adaption, donde
            me encargo de la creación de interfaces de usuario y sistemas
            responsivos utilizando React, tambien participo en la creacion de
            aplicaciones moviles con React Native."
        />
      </div>
    </div>
  );
};

export default Timeline;
