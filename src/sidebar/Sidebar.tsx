import { LottieAnimationDeveloper } from "../components/LottieAnimation";
import { FaUserGraduate } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

const ListMenu = () => {
  return (
    <ul className="text-white flex flex-col justify-around max-sm:text-xs sm:text-sm md:text-base lg:text-2xl md:mx-5 h-full">
      <li className="flex items-center gap-x-3">
        <MdKeyboardArrowRight />
        <a className="font-bold" href="#biografia">
          Biografia
        </a>
        <FaAddressCard />
      </li>
      <li className="flex items-center gap-x-3">
        <MdKeyboardArrowRight />
        <a className="font-bold" href="#educacionyexperiencia">
          Educación y Experiencia
        </a>
        <FaUserGraduate />
      </li>
      <li className="flex items-center gap-x-3">
        <MdKeyboardArrowRight />
        <a className="font-bold" href="#skills">
          Skills
        </a>
        <FaCode />
      </li>
      <li className="flex items-center gap-x-3">
        <MdKeyboardArrowRight />
        <a className="font-bold" href="#proyectosweb">
          Proyectos Web
        </a>
        <TbWorld />
      </li>
      <li className="flex items-center gap-x-3">
        <MdKeyboardArrowRight />
        <a className="font-bold" href="#proyectosmobile">
          Proyectos Móviles
        </a>
        <FaMobile />
      </li>
      <li className="flex items-center gap-x-3">
        <MdKeyboardArrowRight />
        <a className="font-bold" href="#courses">
          Reconocimientos
        </a>
        <GiDiploma />
      </li>
    </ul>
  );
};

export default function Sidebar() {
  return (
    <>
      <div className="grid grid-rows-[70%,30%] h-full ">
        <div className="flex items-center">
          <ListMenu></ListMenu>
        </div>
        <div className="">
          <LottieAnimationDeveloper />
        </div>
      </div>
    </>
  );
}
