import TagSkill from "../components/TagSkill";
import {
  Bootstrap,
  Css,
  Figma,
  Git,
  GitHub,
  Html,
  Javascript,
  Notion,
  ReactIcon,
  Tailwind,
  Typescript,
  ViteJS,
} from "../components/icons";

interface PropTechnologies {
  title?: string;
  tagHTML?: boolean;
  tagCSS?: boolean;
  tagJS?: boolean;
  tagReact?: boolean;
  tagViteJS?: boolean;
  tagBoostrap?: boolean;
  tagTailwind?: boolean;
  tagGit?: boolean;
  tagGitHub?: boolean;
  tagFigma?: boolean;
  tagNotion?: boolean;
  tagTypescript?: boolean;
}

/**Tecnologias Componente */
const Technologies = (props: PropTechnologies) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-center font-bold">{props.title}</h1>
      <div className="flex flex-wrap justify-around mt-5 max-sm:flex-col items-center max-sm:space-y-10">
        {props.tagHTML && <TagSkill skill={Html} />}
        {props.tagCSS && <TagSkill skill={Css} />}
        {props.tagJS && <TagSkill skill={Javascript} />}
        {props.tagReact && <TagSkill skill={ReactIcon} />}
        {props.tagViteJS && <TagSkill skill={ViteJS} />}
        {props.tagBoostrap && <TagSkill skill={Bootstrap} />}
        {props.tagTailwind && <TagSkill skill={Tailwind} />}
        {props.tagGit && <TagSkill skill={Git} />}
        {props.tagGitHub && <TagSkill skill={GitHub} />}
        {props.tagFigma && <TagSkill skill={Figma} />}
        {props.tagNotion && <TagSkill skill={Notion} />}
        {props.tagTypescript && <TagSkill skill={Typescript} />}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <>
      <h1 className="text-white max-sm:text-2xl lg:text-3xl border-b-4 max-sm:p-4 ">
        Skills
      </h1>
      <div className="grid grid-rows-2 max-sm:grid-cols-1 p-2 w-[99%]">
        {/**Descripcion */}
        <div className="">
          <p className="text-white flex h-full text-justify items-center">
            Como desarrollador Frontend, poseo experiencia en el uso de
            tecnologías fundamentales como HTML, CSS, JavaScript y TypeScript.
            Además, estoy familiarizado con librerías CSS como Bootstrap5 y
            Tailwind. En mis proyectos, empleo también bibliotecas como React y
            React Native para el desarrollo de aplicaciones móviles. Poseo
            conocimientos en el uso de sistemas de control de versiones como Git
            y plataformas colaborativas como GitHub. Además, utilizo
            herramientas de diseño como Figma y de organización como Notion para
            gestionar mis proyectos de manera eficiente.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <Technologies
            title="Lenguajes y Tecnologias"
            tagHTML
            tagCSS
            tagJS
            tagTypescript
          />
          <Technologies
            title="Librerias y Frameworks"
            tagReact
            tagViteJS
            tagBoostrap
            tagTailwind
          />
          <Technologies
            title="Gestion y Colaboracion"
            tagGit
            tagGitHub
            tagFigma
            tagNotion
          />
        </div>
      </div>
    </>
  );
}
