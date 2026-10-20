import Biography from "../../components/sections/Biography";
import Skills from "../sections/Skills";
import Timeline from "../sections/Timeline";
import ProjectsWeb from "../sections/Portfolio";

const Container = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <section className="mx-auto w-full px-5 py-12 sm:px-6 lg:w-[90%] lg:px-0 lg:py-16">
        <Biography />
      </section>
      <Timeline />
      <section
        id="proyectos"
        className="mx-auto w-full scroll-mt-8 border-b border-mist-200/70 px-5 py-12 sm:px-6 lg:w-[90%] lg:px-0 lg:py-16 dark:border-white/5"
      >
        <h2 className="text-center text-3xl font-semibold tracking-tight text-accent sm:text-4xl dark:text-accent-soft">
          Desarrollo Profesional
        </h2>
        <div className="mt-8 grid items-stretch gap-12 lg:grid-cols-2 lg:gap-14 [&>*]:min-w-0">
          <Skills />
          <ProjectsWeb />
        </div>
      </section>
      <footer className="border-t border-mist-200/70 py-8 text-center text-sm text-ink-subtle dark:border-white/10 dark:text-stone-500">
        © {new Date().getFullYear()} Edgar Hernández Hernández
      </footer>
    </div>
  );
};

export default Container;
