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
        <div className="shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 lg:w-[min(100%,280px)] dark:border-slate-700/50 dark:bg-slate-800/40">
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-accent dark:bg-sky-500/15 dark:text-accent-soft">
              <PiCertificateFill className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-100">
                {title}
              </h3>
              <dl className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
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
          <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center border-t border-slate-100 pt-6 sm:justify-start dark:border-slate-700/60">
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
