import React from "react";
import Profile from "../../../assets/images/Profile.jpg";
import ButtonLinkComponent from "../../ButtonLink";
import Skills from "../Skills";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Biography: React.FC = () => {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.7fr)] lg:gap-16">
      <div className="order-2 flex min-w-0 flex-col gap-6 lg:order-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Sobre mí
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05] dark:text-stone-100">
            Edgar Hernández Hernández
          </h1>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-accent sm:text-4xl dark:text-accent-soft">
            Frontend Developer
          </p>
        </div>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-ink-muted dark:text-stone-400">
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
        <div className="flex flex-wrap gap-3">
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
        <Skills />
      </div>
      <div className="order-1 mx-auto w-[78%] max-w-[340px] lg:order-2 lg:w-full lg:max-w-none">
        <img
          src={Profile}
          alt="Edgar Hernández Hernández"
          className="portrait-fade aspect-[4/5] w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Biography;
