import Biography from "../../components/sections/Biography";
import Timeline from "../sections/Timeline";
import Skills from "../sections/Skills";
import ProjectsWeb from "../sections/Portfolio";
import Courses from "../sections/Courses";

const Container = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <section className="mx-auto grid w-full items-start gap-12 px-5 py-12 sm:px-6 lg:w-[90%] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-10 lg:px-0 lg:py-16">
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
  );
};

export default Container;
