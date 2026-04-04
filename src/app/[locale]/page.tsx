import { setRequestLocale } from "next-intl/server";
import { Sidebar } from "@/components/layout/Sidebar";
import { MainContent } from "@/components/layout/MainContent";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <CursorGlow />
      <Sidebar />
      <MainContent>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MainContent>
    </>
  );
}
