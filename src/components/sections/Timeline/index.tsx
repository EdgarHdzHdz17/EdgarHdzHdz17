import { useCallback, useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CardTimeLineComponent from "../../CardTimeline";

const experiences = [
  {
    role: "Internship Frontend",
    company: "Instituto de Ingeniería [UNAM]",
    date: "Agosto 2021 - Diciembre 2021",
    description:
      "Colaboré en la creación de sitios web utilizando HTML, CSS y JavaScript. Mi labor se centraba en garantizar que los sitios web ofrecieran una experiencia óptima en una variedad de dispositivos, asegurando así su accesibilidad y usabilidad.",
  },
  {
    role: "Becario Frontend",
    company: "Instituto de Ciencias Aplicadas y Tecnología [ICAT]",
    date: "Febrero 2022 - Diciembre 2023",
    description:
      "Lideré el diseño y desarrollo de sitios web utilizando Bootstrap 4 para 'Telemática para la Educación'. Además, desarrollé 'Educatronicapp' utilizando Expo React Native como proyecto de titulación mediante tesis.",
  },
  {
    role: "Frontend Developer",
    company: "Adaption",
    date: "Junio 2024 - Actualidad",
    description:
      "Actualmente me desempeño como Frontend Developer en Adaption, donde me encargo de la creación de interfaces de usuario y sistemas responsivos utilizando React. También participo en la creación de aplicaciones móviles con React Native.",
  },
  {
    role: "Frontend Developer",
    company: "Binkio",
    date: "Julio 2025 - Noviembre 2025",
    description:
      "Me desempeñé como Frontend Developer en Binkio, donde participé en la creación de interfaces de usuario.",
  },
  {
    role: "Software Developer",
    company: "Lapxo",
    date: "Noviembre 2025 - Actualidad",
    description: "Actualmente me desempeño como Software Developer en Lapxo.",
  },
];

const arrowClass =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-night-card/90 text-stone-100 shadow-card-dark backdrop-blur-md transition hover:border-accent-soft/40 hover:text-accent-soft";

const Timeline = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      observer.disconnect();
    };
  }, [updateArrows]);

  const scroll = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const cards = [...el.children] as HTMLElement[];
    const edge = el.scrollLeft;
    const target =
      direction === 1
        ? cards.find((card) => card.offsetLeft > edge + 8)
        : [...cards].reverse().find((card) => card.offsetLeft < edge - 8);
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="section-shell border-b border-mist-200/70 dark:border-white/5">
      <header className="mb-10 max-w-2xl">
        <p className="section-eyebrow">Trayectoria</p>
        <h2 className="section-title">Experiencia</h2>
        <p className="section-desc">
          Prácticas, beca y rol actual en desarrollo frontend y aplicaciones
          móviles.
        </p>
      </header>
      <div className="relative">
        {canLeft && (
          <button
            type="button"
            aria-label="Ver experiencias anteriores"
            onClick={() => scroll(-1)}
            className={`${arrowClass} left-3`}
          >
            <IoChevronBack className="h-5 w-5" />
          </button>
        )}
        {canRight && (
          <button
            type="button"
            aria-label="Ver experiencias siguientes"
            onClick={() => scroll(1)}
            className={`${arrowClass} right-3`}
          >
            <IoChevronForward className="h-5 w-5" />
          </button>
        )}
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {experiences.map((item) => (
            <div
              key={`${item.company}-${item.date}`}
              className="flex w-[min(100%,22rem)] shrink-0 snap-start"
            >
              <CardTimeLineComponent {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
