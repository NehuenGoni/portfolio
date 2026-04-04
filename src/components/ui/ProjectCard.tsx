"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations();
  const tProjects = useTranslations("projects");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-lg border border-text-muted/10 bg-surface/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent/30 hover:bg-surface/80 hover:shadow-[0_0_30px_rgba(176,124,255,0.03)]"
    >
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={t(project.titleKey)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-text font-semibold text-lg group-hover:text-accent transition-colors duration-200">
            {t(project.titleKey)}
          </h3>
          {project.featured && (
            <span className="shrink-0 text-xs font-mono text-accent bg-accent/10 rounded px-2 py-0.5">
              {tProjects("featured")}
            </span>
          )}
        </div>

        <p className="text-text-muted text-sm mt-3 leading-relaxed">
          {t(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-accent/70 bg-accent/5 rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label={`${tProjects("viewCode")} - ${t(project.titleKey)}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label={`${tProjects("viewDemo")} - ${t(project.titleKey)}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
