"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const categories: SkillCategory[] = ["frontend", "backend", "database", "tools"];

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-24">
      <ScrollReveal>
        <h2 className="flex items-center gap-4 text-2xl font-bold text-text mb-10">
          <span className="text-accent font-mono text-lg font-normal">02.</span>
          {t("title")}
          <span className="h-px flex-1 bg-text-muted/20" />
        </h2>
      </ScrollReveal>

      <div className="space-y-10">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category}>
              <ScrollReveal>
                <h3 className="text-text font-medium mb-4 text-sm uppercase tracking-widest">
                  {t(category)}
                </h3>
              </ScrollReveal>
              <StaggerChildren className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </StaggerChildren>
            </div>
          );
        })}
      </div>
    </section>
  );
}
