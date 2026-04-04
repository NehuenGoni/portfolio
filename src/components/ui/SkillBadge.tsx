"use client";

import { motion } from "motion/react";
import { staggerItem } from "@/components/animations/StaggerChildren";

type SkillBadgeProps = {
  name: string;
};

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      variants={staggerItem}
      className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-mono text-accent transition-all duration-200 hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(176,124,255,0.1)]"
    >
      {name}
    </motion.span>
  );
}
