"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

const container = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={staggerDelay}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
