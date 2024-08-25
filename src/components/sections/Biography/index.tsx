import React from "react";
import Profile from "../../../assets/images/Perfil.png";
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
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                Edgar Hernández Hernández
              </h1>
            </div>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tighter sm:text-5xl lg:text-3xl">
                    Frontend Developer
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Frontend Developer JR con 2 años de experiencia. Mi objetivo
                    es contribuir al desarrollo de sitios web y aplicaciones
                    móviles funcionales que ofrezcan valor final a los usuarios.
                    Actualmente me encuentro aprendiendo React y React Native
                    con proyectos que me proporcionen experiencia.
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
        </div>
      </section>
    </>
  );
};

export default Biography;
