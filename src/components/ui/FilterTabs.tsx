"use client";

import { cn } from "@/lib/utils";

type FilterTabsProps = {
  tabs: { key: string; label: string }[];
  activeTab: string;
  onTabChange: (key: string) => void;
};

export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 border",
            activeTab === tab.key
              ? "bg-accent/10 border-accent/40 text-accent"
              : "border-text-muted/20 text-text-muted hover:border-text-muted/40 hover:text-text"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
