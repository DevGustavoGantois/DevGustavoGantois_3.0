'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGlobe } from 'react-icons/fa';


export function HomeHero() {
    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto">
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
            <Image src="/HomeCTA.svg" width={1150} height={1300} alt="" data-aos="zoom-in" />
            </div>
            <div className="mb-14 lg:mb-0" data-aos="fade-up">
                <Button variant="secondary">Conheça meu portifolio <FaGlobe /></Button>
            </div>
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
        </section>
    )
}