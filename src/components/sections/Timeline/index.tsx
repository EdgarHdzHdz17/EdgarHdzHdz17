import CardTimeLineComponent from "../../CardTimeline";

const Timeline = () => {
  return (
    <section className="section-shell border-b border-slate-200/60 bg-slate-50/50 dark:border-slate-800/60 dark:bg-night-raised/30">
      <header className="mb-10 max-w-2xl">
        <p className="section-eyebrow">Trayectoria</p>
        <h2 className="section-title">Experiencia</h2>
        <p className="section-desc">
          Prácticas, beca y rol actual en desarrollo frontend y aplicaciones
          móviles.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardTimeLineComponent
          role="Internship Frontend"
          company="Instituto de Ingeniería [UNAM]"
          date="Agosto 2021 - Diciembre 2021"
          description="Colaboré en la creación de sitios web utilizando HTML, CSS y
            JavaScript. Mi labor se centraba en garantizar que los sitios web
            ofrecieran una experiencia óptima en una variedad de dispositivos, asegurando así su accesibilidad y usabilidad."
        />
        <CardTimeLineComponent
          role="Becario Frontend"
          company="Instituto de Ciencias Aplicadas y Tecnología [ICAT]"
          date="Febrero 2022 - Diciembre 2023"
          description="Lideré el diseño y desarrollo de sitios web utilizando Bootstrap 4
            para 'Telemática para la Educación'. Además, desarrollé
            'Educatronicapp' utilizando Expo React Native como proyecto de
            titulación mediante tesis."
        />
        <CardTimeLineComponent
          role="Frontend Developer"
          company="Adaption"
          date="Junio 2024 - Actualidad"
          description="Actualmente me desempeño como Frontend Developer en Adaption, donde
            me encargo de la creación de interfaces de usuario y sistemas
            responsivos utilizando React. También participo en la creación de
            aplicaciones móviles con React Native."
        />
      </div>
    </section>
  );
};

export default Timeline;
