"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function About() {
  const t = useTranslations("about");
  const paragraphs = [
    t("paragraphs.0"),
    t("paragraphs.1"),
    t("paragraphs.2"),
  ];

  return (
    <section id="about" className="py-24">
      <ScrollReveal>
        <h2 className="flex items-center gap-4 text-2xl font-bold text-text mb-10">
          <span className="text-accent font-mono text-lg font-normal">01.</span>
          {t("title")}
          <span className="h-px flex-1 bg-text-muted/20" />
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="text-text-muted leading-relaxed">{p}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
