import Biography from "../../components/sections/Biography";
import Timeline from "../sections/Timeline";
import Skills from "../sections/Skills";
import ProjectsWeb from "../sections/Portfolio";
import Courses from "../sections/Courses";
import ThemeToggle from "../ThemeToggle";

const Container = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <ThemeToggle />
      <Biography />
      <Timeline />
      <Skills />
      <ProjectsWeb />
      <Courses />
      <footer className="border-t border-slate-200/80 bg-white py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-night-base dark:text-slate-500">
        © {new Date().getFullYear()} Edgar Hernández Hernández
      </footer>
    </div>
  );
};

export default Container;
