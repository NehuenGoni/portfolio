import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "job-1",
    titleKey: "experience.items.job1.title",
    companyKey: "experience.items.job1.company",
    descriptionKey: "experience.items.job1.description",
    startDate: "2024-04",
    endDate: null,
    techStack: ["React", "TypeScript", "REST APIs"],
  },
  {
    id: "job-2",
    titleKey: "experience.items.job2.title",
    companyKey: "experience.items.job2.company",
    descriptionKey: "experience.items.job2.description",
    startDate: "2010-06",
    endDate: "2024-04",
    techStack: [],
  },
];
