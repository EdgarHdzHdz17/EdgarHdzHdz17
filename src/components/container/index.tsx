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
      <section className="mx-auto grid w-full max-w-7xl items-start gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-10 lg:px-8 lg:py-16">
        <Biography />
        <Skills />
      </section>
      <Timeline />
      <ProjectsWeb />
      <Courses />
      <footer className="border-t border-mist-200/70 py-8 text-center text-sm text-ink-subtle dark:border-white/10 dark:text-stone-500">
        © {new Date().getFullYear()} Edgar Hernández Hernández
      </footer>
      </div>
    </div>
  );
};

export default Container;
