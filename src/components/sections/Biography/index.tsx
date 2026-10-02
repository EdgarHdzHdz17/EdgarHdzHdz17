import React from "react";
import Profile from "../../../assets/images/Profile.jpg";
import ButtonLinkComponent from "../../ButtonLink";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Biography: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-8">
      <div className="relative aspect-[3/4] w-[88%] shrink-0 sm:w-[70%] lg:w-[48%]">
        <img
          src={Profile}
          alt="Edgar Hernández Hernández"
          className="portrait-fade h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-6 text-center lg:text-left">
        <div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink dark:text-stone-100">
            Edgar Hernández Hernández
          </h1>
          <p className="mt-2 text-lg font-medium text-accent sm:text-xl dark:text-accent-soft">
            Frontend Developer
          </p>
        </div>
        <p className="text-pretty text-base leading-relaxed text-ink-muted sm:text-lg dark:text-stone-400">
          Ingeniero en Computación por la Universidad Nacional Autónoma de
          México y Desarrollador Frontend con 2 años de experiencia en la
          creación de soluciones tecnológicas innovadoras. Mi enfoque principal
          es el desarrollo de sitios web y aplicaciones móviles que no solo sean
          visualmente atractivas, sino que también ofrezcan una experiencia de
          usuario intuitiva y eficiente. Estoy comprometido con la utilización
          de las mejores prácticas y tecnologías actuales para entregar
          productos que agreguen un valor real a los usuarios y resuelvan sus
          necesidades de manera efectiva.
        </p>
        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
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
  );
};

export default Biography;
