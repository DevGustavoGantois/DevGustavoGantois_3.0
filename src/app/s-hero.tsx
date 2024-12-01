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
            <div className="flex justify-center items-center flex-col gap-10 mt-20">
            <Image src="/HomeCTA.svg" width={1200} height={1300} alt="" className="" />
            <div className="mb-14 lg:mb-0">
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
            <figure className="flex justify-center items-center">
                <Image src="/LogoElipses.svg" alt="" width={150} height={100} className="w-[100px] lg:w-[150px]" />
            </figure>
        </section>
    )
}