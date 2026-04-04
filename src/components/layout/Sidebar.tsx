"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { NavLink } from "./NavLink";
import { LanguageToggle } from "./LanguageToggle";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

export function Sidebar() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <header className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-[48%] lg:flex-col lg:justify-between lg:px-16 xl:px-24 lg:py-24">
        <div>
          <a href="#" className="group">
            <h1 className="text-5xl font-bold tracking-tight text-text">
              {tHero("name")}
            </h1>
            <h2 className="mt-3 text-xl font-medium text-text-muted">
              {tHero("title")}
            </h2>
          </a>
          <p className="mt-4 max-w-xs text-text-muted leading-relaxed">
            {tHero("subtitle")}
          </p>

          <nav className="mt-16" aria-label="Main navigation">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={`#${item.id}`}
                    label={t(item.key)}
                    isActive={activeSection === item.id}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <SocialLinks />
          <LanguageToggle />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-text-muted/10">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold text-text">
            {tHero("name")}
          </a>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={cn(
            "overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md",
            mobileMenuOpen ? "max-h-80 border-b border-text-muted/10" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 text-sm uppercase tracking-widest transition-colors",
                    activeSection === item.id
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  )}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-4">
            <SocialLinks />
          </div>
        </nav>
      </header>
    </>
  );
}
