export type ProjectCategory = "frontend" | "fullstack" | "backend";

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  techStack: string[];
  category: ProjectCategory;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  titleKey: string;
  companyKey: string;
  descriptionKey: string;
  startDate: string;
  endDate: string | null;
  techStack: string[];
  companyUrl?: string;
}

export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}
