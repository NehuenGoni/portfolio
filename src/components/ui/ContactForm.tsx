"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-mono text-text-muted mb-2"
        >
          {t("nameLabel")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder={t("namePlaceholder")}
          className="w-full rounded-lg border border-text-muted/20 bg-surface/50 px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-mono text-text-muted mb-2"
        >
          {t("emailLabel")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder={t("emailPlaceholder")}
          className="w-full rounded-lg border border-text-muted/20 bg-surface/50 px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-mono text-text-muted mb-2"
        >
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className="w-full rounded-lg border border-text-muted/20 bg-surface/50 px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded font-mono text-sm transition-colors duration-200",
          status === "sending"
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-accent/10"
        )}
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>

      {status === "success" && (
        <p className="text-accent text-sm font-mono">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm font-mono">{t("error")}</p>
      )}
    </form>
  );
}
