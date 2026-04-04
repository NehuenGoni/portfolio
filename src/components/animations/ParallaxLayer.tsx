"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: [number, number];
};

export function ParallaxLayer({
  children,
  className,
  speed = 0.3,
  offset,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ?? ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  );
}
