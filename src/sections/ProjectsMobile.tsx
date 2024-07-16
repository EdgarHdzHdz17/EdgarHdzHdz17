import { LottieAnimationMobile } from "../components/LottieAnimation";
import CardProject from "../components/CardProject";
import {
  Educatronicapp,
  SnapNote,
  VoiceWave,
  Quizify,
  FurryFriend,
} from "../components/images";

export default function ProjectsMobile() {
  return (
    <>
      <h1 className="text-white max-sm:text-2xl lg:text-3xl border-b-4 ">
        Proyectos Mobile
      </h1>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[40%,60%]">
        <div className="flex justify-center items-center ">
          <div className="w-[50%]">
            <LottieAnimationMobile />
          </div>
        </div>
        <div className=" text-white p-2 flex justify-center items-center text-justify">
          <p className="w-[70%]">
            Tambien cuento con experiencia en desarrollo móvil con React Native.
            Estos proyectos me han permitido aplicar conceptos básicos como
            componentes, navegación y manejo de estado, mientras trabajo en la
            creación de interfaces de usuario interactivas y funcionales. En
            estas aplicaciones, he experimentado con diferentes componentes y
            funcionalidades, como listas, formularios, navegación entre
            pantallas y la integración de APIs externas.
          </p>
        </div>
      </div>
      <div className="grid my-5 max-sm:grid-cols-1 max-sm:gap-y-5 md:gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3 ">
        {/**Educatronicapp */}
        <div className="flex justify-center">
          <CardProject
            image={Educatronicapp}
            title={"Educatronicapp"}
            description={
              "Educatronicapp es una aplicación que introduce a sus usuarios a los conocimientos básicos de la programación."
            }
            tagJS
            tagReact
            url={"https://github.com/EdgarHdzHdz17/Educatronicapp.git"}
          ></CardProject>
        </div>
        {/**SnapNote */}
        <div className="flex justify-center">
          <CardProject
            image={SnapNote}
            title={"SnapNote"}
            description={
              "Snap-App es una aplicación para tomar notas, desarrollada en Expo React Native."
            }
            tagJS
            tagReact
            url={"https://github.com/EdgarHdzHdz17/SnapNote.git"}
          ></CardProject>
        </div>
        {/**VoiceWave */}
        <div className="flex justify-center">
          <CardProject
            image={VoiceWave}
            title={"VoiceWave-Transcribe"}
            description={
              "Aplicación móvil con React Native que convierte audio a texto usando un API REST."
            }
            tagJS
            tagReact
            url={"https://github.com/EdgarHdzHdz17/VoiceWave-Transcribe.git"}
          ></CardProject>
        </div>
        {/**VoiceWave */}
        <div className="flex justify-center">
          <CardProject
            image={Quizify}
            title={"Quizify"}
            description={
              "Quizify es una aplicación de preguntas sobre Capitales, Tradiciones y Animales de México desarrollada en Expo React Native."
            }
            tagJS
            tagReact
            url={"https://github.com/EdgarHdzHdz17/Quizify.git"}
          ></CardProject>
        </div>
        {/**FurryFriend */}
        <div className="flex justify-center">
          <CardProject
            image={FurryFriend}
            title={"FurryFriend"}
            description={
              "FurryFriend es una aplicación para obtener datos sobre distintas razas de perros con un API desarrollada en Expo React Native."
            }
            tagJS
            tagReact
            url={"https://github.com/EdgarHdzHdz17/FurryFriend.git"}
          ></CardProject>
        </div>
      </div>
    </>
  );
}
