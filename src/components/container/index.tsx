import Biography from "../../components/sections/Biography";
import Skills from "../sections/Skills";
import ProjectsWeb from "../sections/WebProjects";
// import ProjectsMobile from "../sections/MobileProjects";
import Courses from "../sections/Courses";
import Sidebar from "../../sidebar/Sidebar";

const Container = () => {
  return (
    <div className="grid lg:grid-cols-[20%,80%] w-full h-screen max-md:flex flex-col">
      <div className="max-sm:hidden  lg:h-screen ">
        <Sidebar></Sidebar>
      </div>
      <div className="flex flex-col overflow-y-scroll overflow-hidden ">
        <Biography></Biography>
        <Skills></Skills>
        <ProjectsWeb></ProjectsWeb>
        {/* <ProjectsMobile></ProjectsMobile> */}
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Container;
