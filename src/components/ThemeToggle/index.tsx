import { useCallback, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

const STORAGE_KEY = "edgar-portfolio-theme";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    setDark(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed right-4 top-4 z-[100] flex h-11 w-11 items-center justify-center rounded-2xl border border-mist-200/90 bg-[#fffcf8]/80 text-ink shadow-card backdrop-blur-md transition-all hover:border-stone-400 hover:bg-white dark:border-white/10 dark:bg-night-raised/80 dark:text-accent-soft dark:shadow-card-dark dark:hover:border-accent-soft/40 dark:hover:bg-night-card"
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {dark ? (
        <HiSun className="h-5 w-5" aria-hidden />
      ) : (
        <HiMoon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
};

export default ThemeToggle;
