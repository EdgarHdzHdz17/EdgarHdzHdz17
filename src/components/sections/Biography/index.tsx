import React from "react";
import Profile from "../../../assets/images/AvatarDeveloper.png";
import ButtonLinkComponent from "../../ButtonLink";

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
              <ButtonLinkComponent name="GitHub" url="#" style={GitHubStyle} />
              <ButtonLinkComponent
                name="Linkedin"
                url="#"
                style={LinkedinStyle}
              />
            </div>
          </div>
        </div>
        {/* <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center ">
                Edgar Hernández Hernández
              </h1>
            </div>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tighter sm:text-5xl lg:text-3xl text-gray-400">
                    Frontend Developer
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ingeniero en Computación por la Universidad Nacional
                    Autónoma de México y Desarrollador Frontend con 2 años de
                    experiencia. Mi objetivo es contribuir al desarrollo de
                    sitios web y aplicaciones móviles funcionales que ofrezcan
                    un valor significativo a los usuarios.
                  </p>
                  <div className="flex justify-center items-center gap-5">
                    <ButtonLinkComponent
                      name="GitHub"
                      url="#"
                      style={GitHubStyle}
                    />
                    <ButtonLinkComponent
                      name="Linkedin"
                      url="#"
                      style={LinkedinStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={Profile} width="400" height="400" alt="ImageProfile" />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Biography;
