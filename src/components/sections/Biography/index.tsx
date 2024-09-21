import React from "react";
import Profile from "../../../assets/images/AvatarDeveloper.png";
import ButtonLinkComponent from "../../ButtonLink";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const GitHubStyle = {
  color: "#fff",
  backgroundColor: "#333",
};

const LinkedinStyle = {
  color: "#fff",
  backgroundColor: "#0077b5",
};

const Biography: React.FC = () => {
  return (
    <>
      <section className="w-full p-5 flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 mt-10 px-60 max-sm:px-2  max-sm:mt-5 max-sm:gap-2">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 bg-slate-200">
            <img src={Profile} width="200" height="200" alt="ImageProfile" />
          </div>
          <div className="flex flex-col gap-5 max-sm:gap-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-sky-500">
              Edgar Hernández Hernández
            </h1>
            <h2 className="text-xl font-bold tracking-tighter sm:text-5xl lg:text-3xl text-gray-400">
              Frontend Developer
            </h2>
            <p className="text-lg mb-4 text-center max-sm:text-justify max-sm:text-base">
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
            <div className="flex justify-center items-center gap-5">
              <ButtonLinkComponent
                name="GitHub"
                url="https://github.com/EdgarHdzHdz17/EdgarHdzHdz17"
                style={GitHubStyle}
                icon={<FaGithub className="ml-2 mt-1" />}
              />
              <ButtonLinkComponent
                name="Linkedin"
                url="https://www.linkedin.com/in/edgar-hern%C3%A1ndez-hern%C3%A1ndez-10ba72208"
                style={LinkedinStyle}
                icon={<FaLinkedin className="ml-2 mt-1" />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biography;
