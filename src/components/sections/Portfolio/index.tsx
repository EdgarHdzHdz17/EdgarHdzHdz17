import { useCallback, useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import data from "../../../datas/dataprojects/data.json";
import CardProjectComponent from "../../CardProject/index";

const arrowClass =
  "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-night-card/90 text-stone-100 shadow-card-dark backdrop-blur-md transition hover:border-accent-soft/40 hover:text-accent-soft";

const Portfolio = () => {
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
    <div className="flex h-full min-h-0 min-w-0 flex-col">
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        {canLeft && (
          <button
            type="button"
            aria-label="Ver proyecto anterior"
            onClick={() => scroll(-1)}
            className={`${arrowClass} left-3`}
          >
            <IoChevronBack className="h-5 w-5" />
          </button>
        )}
        {canRight && (
          <button
            type="button"
            aria-label="Ver proyecto siguiente"
            onClick={() => scroll(1)}
            className={`${arrowClass} right-3`}
          >
            <IoChevronForward className="h-5 w-5" />
          </button>
        )}
        <div
          ref={scroller}
          className="flex h-full min-h-0 w-full min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.map((project) => (
            <div
              key={project.title}
              className="flex h-full w-full min-w-0 max-w-full shrink-0 grow-0 basis-full snap-start overflow-hidden"
            >
              <CardProjectComponent
                title={project.title}
                skills={project.skills}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
