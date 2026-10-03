import { useCallback, useEffect, useRef, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import {
  IoChevronBack,
  IoChevronForward,
  IoTimeOutline,
} from "react-icons/io5";
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
    date: "Junio 2024 - Julio 2025",
    description:
      "Me desempeñé como Frontend Developer en Adaption, donde me encargaba de la creación de interfaces de usuario y sistemas responsivos utilizando React. También participé en la creación de aplicaciones móviles con React Native.",
  },
  {
    role: "Frontend Developer",
    company: "Binkio · Remoto",
    date: "Julio 2025 - Noviembre 2025",
    description:
      "Me desempeñé como Frontend Developer en Binkio, donde participé en la creación de interfaces de usuario.",
  },
  {
    role: "Software Developer",
    company: "Lapxo · Remoto",
    date: "Noviembre 2025 - Actualidad",
    description: "Actualmente me desempeño como Software Developer en Lapxo.",
  },
];

const currentRoles = experiences
  .filter((item) => item.date.includes("Actualidad"))
  .reverse();
const history = experiences.filter((item) => !item.date.includes("Actualidad"));

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
      </header>
      <div className="flex items-stretch gap-4 sm:gap-6">
        {currentRoles.map((item) => (
          <article
            key={`${item.company}-${item.date}`}
            className="relative flex w-[min(68vw,22rem)] shrink-0 flex-col overflow-hidden rounded-3xl border border-accent-soft/35 bg-night-card/90 p-5 shadow-card-dark sm:p-6"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-soft to-accent" />
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
              Actual
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-stone-50 sm:text-2xl">
              {item.role}
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-stone-200">
              <FaRegBuilding className="h-4 w-4 shrink-0 text-accent-soft" />
              {item.company}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-accent-soft">
              <IoTimeOutline className="h-4 w-4" />
              {item.date}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-stone-400 sm:text-base">
              {item.description}
            </p>
          </article>
        ))}
        <div className="relative min-w-0 flex-1">
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
            className="flex h-full snap-x snap-mandatory gap-4 overflow-x-auto sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {history.map((item) => (
              <div
                key={`${item.company}-${item.date}`}
                className="flex w-[min(100%,20rem)] shrink-0 snap-start"
              >
                <CardTimeLineComponent {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
