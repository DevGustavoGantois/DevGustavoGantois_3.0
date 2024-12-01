'use client'
import { LanguageProvider } from "@/context/language-context";
import { HomeAbout } from "./s-about";
import { HomeHero } from "./s-hero";
import { HomeProjects } from "./s-projects";

export default function Home() {
  return (
    <>
      <LanguageProvider>
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      </LanguageProvider>
    </>
  );
}
