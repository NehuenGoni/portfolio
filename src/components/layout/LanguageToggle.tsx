"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-1 rounded-full border border-text-muted/30 px-1 py-1 text-xs font-mono transition-colors hover:border-accent/50"
      aria-label="Toggle language"
    >
      <span
        className={cn(
          "relative z-10 rounded-full px-2 py-0.5 transition-colors duration-200",
          locale === "es"
            ? "text-background"
            : "text-text-muted hover:text-text"
        )}
      >
        ES
      </span>
      <span
        className={cn(
          "relative z-10 rounded-full px-2 py-0.5 transition-colors duration-200",
          locale === "en"
            ? "text-background"
            : "text-text-muted hover:text-text"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-accent transition-all duration-300",
          locale === "es" ? "left-1" : "left-[calc(50%+1px)]"
        )}
      />
    </button>
  );
}
