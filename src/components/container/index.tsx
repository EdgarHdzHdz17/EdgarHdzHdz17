import Biography from "../../components/sections/Biography";
import Timeline from "../sections/Timeline";
import Skills from "../sections/Skills";
import ProjectsWeb from "../sections/Portfolio";
import Courses from "../sections/Courses";
import ThemeToggle from "../ThemeToggle";
import Landscape from "../Landscape";

const Container = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Landscape />
      <div className="relative z-10 flex min-h-screen w-full flex-col">
      <ThemeToggle />
      <Biography />
      <Timeline />
      <Skills />
      <ProjectsWeb />
      <Courses />
      <footer className="border-t border-mist-200/70 py-8 text-center text-sm text-ink-subtle dark:border-white/10 dark:text-slate-500">
        © {new Date().getFullYear()} Edgar Hernández Hernández
      </footer>
      </div>
    </div>
  );
};

export default Container;
