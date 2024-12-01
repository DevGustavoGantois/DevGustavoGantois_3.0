'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from "@/context/language-context";
import { pt } from "@/data/languages/pt-br";
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";
import Link from "next/link";
import { CarouselSlide } from "@/components/Animate/carousel-slide";

export function HomeHero() {

    const { language } = useLanguage();

  const heroData =
    language === "pt"
      ? pt.homeHero
      : language === "en"
      ? en.homeHero
      : fr.homeHero;

    return (
       <section>
                <div
                className="absolute flex flex-col items-center justify-center w-full h-[950px] lg:h-[1170px] -z-50 -top-64 bg-[left-70%] lg:bg-[center] brightness-50"
                style={{
                backgroundImage: "url(/BgHero.svg)",
                backgroundSize: "cover",
                backgroundPosition: "calc(30%) center",
                }}
            />
            <div className="max-w-[1500px] p-6 lg:p-0 mx-auto">
                <div className="hidden lg:flex justify-between mb-20">
                <div>
                    <p className="text-white font-secondary animate-pulse">X Front-end X</p>
                </div>
                <div>
                    <p className="text-white font-secondary animate-pulse">X UI Designer X</p>
                </div>
                </div>
                <div className=" flex justify-center items-center flex-col gap-10 mt-20">
                    <div className="flex flex-col gap-2 justify-center text-center md:hidden" data-aos="fade-up">
                        <h1 className="font-primary text-7xl bg-gradient-to-r from-blue-500 via-blue-700 to-white bg-clip-text text-transparent animate-pulse">Front-End Developer</h1>
                        <h1 className="font-primary text-7xl bg-gradient-to-r from-blue-500 via-blue-700 to-white bg-clip-text text-transparent animate-pulse">Ui Designer</h1>
                    </div>
                <div className="hidden md:flex">
                <Image src="/HomeCTA.svg" width={1150} height={1300} alt="" data-aos="zoom-in" className="float" />
                </div>
                {heroData.map((item, index) => {
                    return (
                        <div className="mb-14 lg:mb-0" data-aos="fade-up" key={index}>
                        <Link href="#Projects">
                        <Button className="flex justify-center items-center gap-2" variant="secondary_port">{item.btnText}<FaGlobe /></Button>
                        </Link>
                </div>
                    )
                })}
                </div>
                <div className="hidden lg:flex justify-between mt-20">
                <div>
                    <p className="text-white font-secondary animate-pulse">X Front-end X</p>
                </div>
                <div>
                    <p className="text-white font-secondary animate-pulse">X UI Designer X</p>
                </div>
                </div>
                <figure className="flex justify-center items-center" data-aos="zoom-in">
                    <Image src="/LogoElipses.svg" alt="" width={150} height={100} className="w-[100px] lg:w-[150px]" />
                </figure>
            </div>
            <div className="mt-20">
                <CarouselSlide />
            </div>
       </section>
    )
}