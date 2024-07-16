import Biography from "./sections/Biography";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import ProjectsWeb from "./sections/ProjectsWeb";
import ProjectsMobile from "./sections/ProjectsMobile";
import Courses from "./sections/Courses";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      {/*Container principal*/}
      <div className="bg-background-color mx-auto w-screen h-screen grid max-sm:grid-rows-1 sm:grid-cols-[20%,80%] md:grid-cols-[30%,70%] lg:grid-cols-[20%,80%]">
        {/*Container izquierdo*/}
        <div className="max-sm:hidden ">
          <Sidebar />
        </div>
        {/*Container derecho*/}
        <div className="overflow-y-scroll overflow-hidden flex flex-col w-[100%] my-5 ">
          <div className=" " id="biografia">
            <Biography />
          </div>
          {/**Educacion y Experiencia */}
          <div className="" id="educacionyexperiencia">
            <Timeline />
          </div>
          {/**Skills */}
          <div className="" id="skills">
            <Skills />
          </div>
          {/**ProjectsWeb */}
          <div className="" id="proyectosweb">
            <ProjectsWeb />
          </div>
          {/**ProjectsMobile */}
          <div className="" id="proyectosmobile">
            <ProjectsMobile />
          </div>
          {/**Courses */}
          <div className="" id="courses">
            <Courses />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
