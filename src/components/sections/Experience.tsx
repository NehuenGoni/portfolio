"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { experiences } from "@/data/experience";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24">
      <ScrollReveal>
        <h2 className="flex items-center gap-4 text-2xl font-bold text-text mb-10">
          <span className="text-accent font-mono text-lg font-normal">03.</span>
          {t("title")}
          <span className="h-px flex-1 bg-text-muted/20" />
        </h2>
      </ScrollReveal>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
