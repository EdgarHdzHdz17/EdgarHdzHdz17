import Biography from "../../components/sections/Biography";
import Skills from "../sections/Skills";
import ProjectsWeb from "../sections/WebProjects";
import ProjectsMobile from "../sections/MobileProjects";
import Courses from "../sections/Courses";

const Container = () => {
  return (
    <div className="grid lg:grid-cols-[20%,80%] min-h-screen w-full max-md:flex flex-col">
      <div className="max-sm:hidden bg-gray-400 ">Sidebar</div>
      <div className="flex flex-col  ">
        <Biography></Biography>
        <Skills></Skills>
        <ProjectsWeb></ProjectsWeb>
        <ProjectsMobile></ProjectsMobile>
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Container;
