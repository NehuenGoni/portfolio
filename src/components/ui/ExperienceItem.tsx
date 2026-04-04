"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { Experience } from "@/types";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const t = useTranslations();
  const tExp = useTranslations("experience");

  return (
    <ScrollReveal delay={0.1 * index}>
      <div className="group relative grid grid-cols-[auto_1fr] gap-6">
        {/* Timeline dot and line */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full border-2 border-accent bg-background mt-1.5 group-hover:bg-accent transition-colors duration-200" />
          <div className="w-px flex-1 bg-text-muted/20" />
        </div>

        {/* Content */}
        <div className="pb-12">
          <p className="text-text-muted text-xs font-mono mb-1">
            {formatDate(experience.startDate)} —{" "}
            {experience.endDate
              ? formatDate(experience.endDate)
              : tExp("present")}
          </p>
          <h3 className="text-text font-semibold text-lg group-hover:text-accent transition-colors duration-200">
            {t(experience.titleKey)}
          </h3>
          <p className="text-accent/80 text-sm font-medium">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {t(experience.companyKey)}
              </a>
            ) : (
              t(experience.companyKey)
            )}
          </p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            {(t.raw(experience.descriptionKey) as string[]).map((item, i) => (
              <li key={i} className="text-text-muted leading-relaxed text-sm">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-accent/70 bg-accent/5 rounded px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
