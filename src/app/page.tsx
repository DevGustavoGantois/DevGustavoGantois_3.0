import { HomeAbout } from "./s-about";
import { HomeHero } from "./s-hero";
import { HomeProjects } from "./s-projects";

export default function Home() {
  return (
    <>
     <HomeHero />
     <HomeAbout />
     <HomeProjects />
    </>
  );
}
