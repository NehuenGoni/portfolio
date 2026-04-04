"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24">
      <ScrollReveal>
        <h2 className="flex items-center gap-4 text-2xl font-bold text-text mb-4">
          <span className="text-accent font-mono text-lg font-normal">05.</span>
          {t("title")}
          <span className="h-px flex-1 bg-text-muted/20" />
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-text-muted text-lg mb-10">{t("subtitle")}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ContactForm />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 pt-8 border-t border-text-muted/10">
          <SocialLinks />
        </div>
      </ScrollReveal>
    </section>
  );
}
