'use client'
import { LanguageProvider } from "@/context/language-context";
import { HomeAbout } from "./s-about";
import { HomeHero } from "./s-hero";
import { HomeProjects } from "./s-projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { HomeServices } from "./s-services";
import { HomeTestimonials } from "./s-testimonials";
import { HomeExperiences } from "./s-experiences";
import { HomeTechnologies } from "./s-technologies";
import { HomeFAQ } from "./s-faq";
import { HomeContact } from "./s-contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      <HomeServices />
      <HomeTestimonials />
      <HomeExperiences />
      <HomeTechnologies />
      <HomeFAQ />
      <HomeContact />
    </>
  );
}
