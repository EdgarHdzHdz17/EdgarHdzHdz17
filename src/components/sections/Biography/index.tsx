import React from "react";
import Profile from "../../../assets/images/Perfil.png";

const Biography: React.FC = () => {
  return (
    <>
      <section className="w-full p-5 ">
        <div className="container px-4 md:px-6">
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Frontend Developer
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I am a passionate frontend developer with a strong focus
                      on creating beautiful and user-friendly web applications.
                      With years of experience, I have honed my skills in modern
                      JavaScript frameworks, responsive design, and
                      user-centered development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={Profile} width="500" height="500" alt="Hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biography;
