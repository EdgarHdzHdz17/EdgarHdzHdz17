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
    "inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-night-base dark:hover:bg-white",
  linkedin:
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0957a6] dark:bg-[#3b9ae8] dark:text-white dark:hover:bg-[#2d8fd8]",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-600/60 dark:bg-night-raised/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-night-card",
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
