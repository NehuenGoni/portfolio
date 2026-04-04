"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState("all");

  const tabs = [
    { key: "all", label: t("filterAll") },
    { key: "frontend", label: t("filterFrontend") },
    { key: "fullstack", label: t("filterFullstack") },
    { key: "backend", label: t("filterBackend") },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <ScrollReveal>
        <h2 className="flex items-center gap-4 text-2xl font-bold text-text mb-10">
          <span className="text-accent font-mono text-lg font-normal">04.</span>
          {t("title")}
          <span className="h-px flex-1 bg-text-muted/20" />
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FilterTabs
          tabs={tabs}
          activeTab={activeFilter}
          onTabChange={setActiveFilter}
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
