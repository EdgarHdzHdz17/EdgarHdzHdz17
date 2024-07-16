import { Card } from "keep-react";
import { Button } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLanguage } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Profile from "../assets/images/Perfil.png";

export default function Biography() {
  /**Title */
  const Title = () => {
    return (
      <div className="">
        <h2 className=" text-sky-400 max-sm:text-2xl max-sm:ml-5 md:text-3xl md:ml-5 lg:text-4xl">
          Hola!, Soy
        </h2>
        <h1 className=" text-sky-400 font-bold max-sm:text-3xl max-sm:ml-5 md:text-4xl md:ml-5 lg:text-6xl">
          Edgar Hernández Hernández
        </h1>
      </div>
    );
  };

  /**AboutMe */
  const AboutMe = () => {
    return (
      <Card className="border-transparent bg-transparent max-w-sm lg:max-w-lg">
        <Card.Content>
          <Card.Title className="flex justify-center text-white font-bold">
            Frontend Developer
          </Card.Title>
          <Card.Description className="text-white mt-5 text-justify lg:text-base  ">
            Frontend Developer JR con 2 años de experiencia. Mi objetivo es
            contribuir al desarrollo de sitios web y aplicaciones móviles
            funcionales que ofrezcan valor final a los usuarios. <br></br>
            Actualmente me encuentro aprendiendo React y React Native con
            proyectos que me proporcionen experiencia.
          </Card.Description>
          <div className="mt-5 flex justify-center">
            <ButtonLink></ButtonLink>
          </div>
        </Card.Content>
      </Card>
    );
  };

  /**Details */
  const Details = () => {
    return (
      <div className="p-5 text-white">
        <ul className="space-y-5 ">
          <li className="flex items-center gap-x-2">
            <FaHouseChimney /> Ubicación: CDMX
          </li>
          <li className="flex items-center gap-x-2">
            <IoLogoWhatsapp />
            WhatsApp: 5538840444
          </li>
          <li className="flex items-center gap-x-2">
            <FaLanguage /> Idiomas: Ingles
          </li>
          <li className="flex items-center gap-x-2">
            <MdEmail /> Correo: edgarhdzhdz17@hotmail.com
          </li>
        </ul>
      </div>
    );
  };

  /**Butons */
  const ButtonLink = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <a
          className="bg-sky-600 rounded-md"
          href="https://www.linkedin.com/in/edgar-hern%C3%A1ndez-hern%C3%A1ndez-10ba72208"
        >
          <Button>
            Linkedin <FaLinkedin className="ml-2 mt-1" />
          </Button>
        </a>
        <a
          className="bg-black rounded-md"
          href="https://github.com/EdgarHdzHdz17"
        >
          <Button color="blue">
            GitHub<FaGithub className="ml-2 mt-1"></FaGithub>
          </Button>
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-[60%,40%] mt-5 ">
        <div className=" flex flex-col justify-center items-center ">
          <Title />
          <AboutMe />
        </div>
        <div className=" flex flex-col justify-center items-center max-sm:mt-5">
          <img
            className="w-[60%] rounded-lg bg-sky-400"
            src={Profile}
            alt="Profile Image"
          />
          <Details />
        </div>
      </div>
    </>
  );
}
