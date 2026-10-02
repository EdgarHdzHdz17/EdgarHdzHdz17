import React from "react";
import Profile from "../../../assets/images/AvatarDeveloper.png";
import ButtonLinkComponent from "../../ButtonLink";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Biography: React.FC = () => {
  return (
    <section className="relative">
      <div className="section-shell relative z-10 flex flex-col items-center gap-10 pb-20 pt-12 md:flex-row md:items-start md:gap-14 md:pt-16">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/35 via-white to-sky-200/40 blur-sm dark:from-cyan-300/30 dark:via-night-card dark:to-sky-400/20" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-card ring-1 ring-cyan-100 dark:border-night-card dark:shadow-card-dark dark:ring-cyan-300/20 sm:h-44 sm:w-44">
            <img
              src={Profile}
              width={176}
              height={176}
              alt="Edgar Hernández Hernández"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex max-w-2xl flex-col gap-6 text-center md:text-left">
          <div>
            <p className="section-eyebrow">Portfolio</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-slate-50">
              Edgar Hernández Hernández
            </h1>
            <p className="mt-2 text-lg font-medium text-accent sm:text-xl dark:text-accent-soft">
              Frontend Developer
            </p>
          </div>
          <p className="text-pretty text-base leading-relaxed text-ink-muted sm:text-lg dark:text-slate-400">
            Ingeniero en Computación por la Universidad Nacional Autónoma de
            México y Desarrollador Frontend con 2 años de experiencia en la
            creación de soluciones tecnológicas innovadoras. Mi enfoque
            principal es el desarrollo de sitios web y aplicaciones móviles
            que no solo sean visualmente atractivas, sino que también ofrezcan
            una experiencia de usuario intuitiva y eficiente. Estoy
            comprometido con la utilización de las mejores prácticas y
            tecnologías actuales para entregar productos que agreguen un valor
            real a los usuarios y resuelvan sus necesidades de manera
            efectiva.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <ButtonLinkComponent
              name="GitHub"
              url="https://github.com/EdgarHdzHdz17/EdgarHdzHdz17"
              variant="github"
              icon={<FaGithub className="h-4 w-4" aria-hidden />}
            />
            <ButtonLinkComponent
              name="LinkedIn"
              url="https://www.linkedin.com/in/edgar-hern%C3%A1ndez-hern%C3%A1ndez-10ba72208"
              variant="linkedin"
              icon={<FaLinkedin className="h-4 w-4" aria-hidden />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
