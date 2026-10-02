import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import ButtonLinkComponent from "../ButtonLink";
import { FaGithub } from "react-icons/fa";

interface CardCourseComponentProps {
  title: string;
  date: string;
  company: string;
  description: string;
  image: string;
  link: string;
}

const CardCourseComponent: React.FC<CardCourseComponentProps> = ({
  title,
  date,
  company,
  description,
  image,
  link,
}) => {
  return (
    <article className="card-surface flex flex-col gap-6 overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-start">
        <div className="shrink-0 overflow-hidden rounded-2xl border border-mist-100 bg-mist-50 lg:w-[min(100%,280px)] dark:border-white/10 dark:bg-night-raised">
          <img
            src={image}
            alt=""
            width={400}
            height={300}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist-100 text-accent dark:bg-white/5 dark:text-accent-soft">
              <PiCertificateFill className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl dark:text-stone-100">
                {title}
              </h3>
              <dl className="mt-3 space-y-1 text-sm text-ink-muted dark:text-stone-400">
                <div>
                  <dt className="sr-only">Fecha</dt>
                  <dd>Emitido: {date}</dd>
                </div>
                <div>
                  <dt className="sr-only">Emisor</dt>
                  <dd>Emisor: {company}</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-ink-muted sm:text-base dark:text-stone-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center border-t border-mist-100 pt-6 sm:justify-start dark:border-white/10">
        <ButtonLinkComponent
          name="Ver en GitHub"
          url={link}
          variant="outline"
          icon={<FaGithub className="h-4 w-4" aria-hidden />}
        />
      </div>
    </article>
  );
};

export default CardCourseComponent;
