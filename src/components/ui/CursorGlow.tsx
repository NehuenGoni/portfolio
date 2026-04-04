"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, prefersReducedMotion]);

  if (!isDesktop || prefersReducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(176,124,255,0.07) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
