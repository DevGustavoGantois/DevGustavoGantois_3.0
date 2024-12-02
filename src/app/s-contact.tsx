import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { pt } from "@/data/languages/pt-br";
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaBehance, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export function HomeContact() {

    const { language } = useLanguage();

    const contactData = 
    language === 'pt' 
    ? pt.homeContactData
    : language === 'en'
    ? en.homeContactData 
    : fr.homeContactData;

    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-0 lg:mt-40">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
                {contactData.map((item, index) => {
                    return (
                    <article key={index} className="mt-48">
                    <h1 className="font-primary text-white text-5xl lg:text-6xl text-center lg:text-start">{item.title}</h1>
                    <div className="flex justify-center lg:justify-start">
                    <p className="font-secondary font-light max-w-[600px] text-center lg:text-start text-white">
                    {item.description}
                    </p>
                    </div>
                    <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                        <Button variant="primary_port">{item.btnTextPrimary}</Button>
                        <Button variant="secondary_port">{item.btnTextSecondary}</Button>
                    </div>
                    <div className="flex gap-2 justify-center lg:justify-start items-center mt-6">
                    <Link href="" target="_blank">
                        <FaInstagram size={20} className="text-white" />
                    </Link>
                    <Link href="" target="_blank">
                        <FaBehance size={20} className="text-white" />
                    </Link>
                    <Link href="" target="_blank">
                        <FaLinkedin size={20} className="text-white" />
                    </Link>
                    <Link href="" target="_blank">
                        <FaEnvelope size={20} className="text-white" />
                    </Link>
                    </div>
                </article>
                    )
                })}
                <figure className="mt-0 lg:-mt-16">
                    <Image src="/ContactImg.svg" width={700} quality={100} height={700} alt="" className="animate-pulse" />
                </figure>
            </div>
            <div className="mt-20 flex justify-center items-center animate-pulse">
                <Image src="/CTAContactImg.svg" width={900} height={600} alt="" className="w-full" />
            </div>
        </section>
    )
}