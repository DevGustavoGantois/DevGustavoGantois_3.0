'use client'
import { LanguageProvider } from "@/context/language-context";
import { HomeAbout } from "./s-about";
import { HomeHero } from "./s-hero";
import { HomeProjects } from "./s-projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

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
