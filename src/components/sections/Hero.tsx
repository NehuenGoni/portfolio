"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { GradientBlob } from "@/components/ui/GradientBlob";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[calc(100vh-6rem)] lg:min-h-screen flex flex-col justify-center -mt-24 pt-24 lg:mt-0 lg:pt-0">
      <GradientBlob className="w-[500px] h-[500px] -top-20 -right-4" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-accent font-mono text-sm mb-4"
      >
        {t("greeting")}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-tight lg:hidden"
      >
        {t("name")}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-muted mt-2 lg:mt-0"
      >
        {t("title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-lg text-text-muted text-lg leading-relaxed"
      >
        {t("subtitle")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-200"
        >
          {t("cta")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
      </motion.div>
    </section>
  );
}
