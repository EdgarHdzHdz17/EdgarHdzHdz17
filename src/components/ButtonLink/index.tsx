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
    "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-mist-50 shadow-sm transition-colors hover:bg-black dark:bg-mist-50 dark:text-night-base dark:hover:bg-white",
  linkedin:
    "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-mist-50 shadow-sm transition-colors hover:bg-accent-hover dark:bg-accent-soft/15 dark:text-accent-soft dark:ring-1 dark:ring-accent-soft/30 dark:hover:bg-accent-soft/25",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border border-mist-200 bg-[#fffcf8]/80 px-5 py-2.5 text-sm font-medium text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-stone-400 hover:bg-white dark:border-white/15 dark:bg-night-raised/80 dark:text-stone-200 dark:hover:border-accent-soft/40 dark:hover:bg-night-card",
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
