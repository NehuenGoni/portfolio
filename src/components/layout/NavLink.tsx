"use client";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export function NavLink({ href, label, isActive }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "group flex items-center gap-3 py-2 text-sm font-medium transition-all duration-300",
        isActive ? "text-accent" : "text-text-muted hover:text-text"
      )}
    >
      <span
        className={cn(
          "h-px transition-all duration-300",
          isActive
            ? "w-16 bg-accent"
            : "w-8 bg-text-muted group-hover:w-16 group-hover:bg-text"
        )}
      />
      <span className="uppercase tracking-widest text-xs">{label}</span>
    </a>
  );
}
