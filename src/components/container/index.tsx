import Biography from "../../components/sections/Biography";
import Timeline from "../sections/Timeline";
import ProjectsWeb from "../sections/Portfolio";
import Courses from "../sections/Courses";

const Container = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <section className="mx-auto w-full px-5 py-12 sm:px-6 lg:w-[90%] lg:px-0 lg:py-16">
        <Biography />
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
