import Biography from "../../components/sections/Biography";
import Timeline from "../sections/Timeline";
import Skills from "../sections/Skills";
import ProjectsWeb from "../sections/Portfolio";
import Courses from "../sections/Courses";

const Container = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Biography></Biography>
      <Timeline></Timeline>
      <Skills></Skills>
      <ProjectsWeb></ProjectsWeb>
      <Courses></Courses>
    </div>
  );
};

export default Container;
