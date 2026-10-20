import React from "react";
import Profile from "../../../assets/images/Profile.jpg";
import skillsData from "../../../datas/dataskill/data.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = skillsData.flatMap((group) => group.skills);
const skillByName = Object.fromEntries(skills.map((item) => [item.skill, item]));

const skillRows = [
  ["HTML", "JavaScript", "TypeScript", "CSS"],
  ["React", "Expo React Native", "Vite JS", "Tailwind", "Bootstrap"],
  ["Git", "GitHub", "Jira", "Slack", "Figma", "Notion"],
].map((names) => names.map((name) => skillByName[name]));

const sideLinks = [
  {
    label: "",
    text: "Rol actual en Lapxo y trayectoria en desarrollo frontend.",
    href: "#experiencia",
    action: "Ver trayectoria",
  },
  {
    label: "Proyectos",
    text: "Telemática para la Educación y Educatronicapp.",
    href: "#proyectos",
    action: "Ver proyectos",
  },
];

const Biography: React.FC = () => {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(200px,0.82fr)_minmax(168px,220px)] lg:gap-8 xl:gap-12">
      <div className="min-w-0">
        <div className="h-0.5 w-14 bg-accent-soft" />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05] dark:text-stone-100">
          Edgar Hernández Hernández
        </h1>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-accent sm:text-4xl dark:text-accent-soft">
          Frontend Developer
        </p>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base dark:text-stone-400">
          Ingeniero en Computación por la Universidad Nacional Autónoma de
          México y Desarrollador Frontend enfocado en el desarrollo de
          aplicaciones web y móviles utilizando React y React Native.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-5 lg:max-w-none lg:translate-x-4 xl:translate-x-6">
          {skillRows.map((row) => (
            <ul key={row[0].skill} className="flex justify-center gap-x-3 gap-y-1">
              {row.map((item) => (
                <li
                  key={item.skill}
                  className={`flex flex-col items-center gap-1.5 text-center text-[11px] leading-tight text-stone-300 ${
                    item.skill === "Expo React Native" ? "whitespace-nowrap" : "w-14"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={`h-6 w-6 shrink-0 object-contain ${
                      item.skill === "Expo React Native" ? "rounded-sm bg-white" : ""
                    }`}
                  />
                  {item.skill}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mx-auto w-[78%] max-w-[340px] lg:w-full lg:max-w-none">
        <img
          src={Profile}
          alt="Edgar Hernández Hernández"
          className="portrait-fade aspect-[4/5] w-full object-cover object-center"
        />
      </div>

      <aside className="flex flex-col gap-8 lg:gap-10">
        {sideLinks.map((item) => (
          <div key={item.href}>
            {item.label ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                {item.label}
              </p>
            ) : null}
            <p className={`${item.label ? "mt-3" : ""} text-sm leading-relaxed text-stone-400`}>
              {item.text}
            </p>
            <a
              href={item.href}
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft transition-colors hover:text-white"
            >
              {item.action}
              <span aria-hidden>→</span>
            </a>
          </div>
        ))}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
            Sígueme
          </p>
          <div className="mt-3 flex items-center gap-4 text-stone-300">
            <a
              href="https://github.com/EdgarHdzHdz17/EdgarHdzHdz17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent-soft"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/edgar-hern%C3%A1ndez-hern%C3%A1ndez-10ba72208"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent-soft"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Biography;
