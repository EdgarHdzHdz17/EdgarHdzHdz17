import type { FC, ReactNode } from "react";

type ButtonVariant = "github" | "linkedin" | "outline";

interface ButtonLinkComponentProps {
  name: string;
  url: string;
  variant?: ButtonVariant;
  icon: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  github:
    "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0e1c2a] dark:bg-mist-50 dark:text-night-base dark:hover:bg-white",
  linkedin:
    "inline-flex items-center justify-center gap-2 rounded-full bg-cyan-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cyan-800 dark:bg-cyan-300/15 dark:text-cyan-100 dark:ring-1 dark:ring-cyan-300/30 dark:hover:bg-cyan-300/25",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border border-mist-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-cyan-300 hover:bg-white dark:border-cyan-200/20 dark:bg-night-raised/80 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:bg-night-card",
};

const ButtonLinkComponent: FC<ButtonLinkComponentProps> = ({
  name,
  url,
  variant = "outline",
  icon,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={variantClass[variant]}
    >
      {name}
      {icon}
    </a>
  );
};

export default ButtonLinkComponent;
