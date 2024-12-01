import { useLanguage } from "@/context/language-context"
import { en } from "@/data/languages/en"
import { fr } from "@/data/languages/fr"
import { pt } from "@/data/languages/pt-br"
import { FaAngular, FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNode, FaReact, FaSass, FaVuejs } from "react-icons/fa"

export function HomeTechnologies() {

    const { language } = useLanguage()

    const technologiesData =
    language === 'pt'
    ? pt.homeTechnologiesData
    : language === 'en'
    ? en.homeTechnologiesData
    : fr.homeTechnologiesData

    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40 mb-4 lg:mb-20">
            {technologiesData.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col justify-center mb-6 lg:mb-16">
                <h1 className="font-primary text-white  text-2xl lg:text-6xl text-center">{item.title}</h1>
                <p className="font-secondary text-white text-sm lg:text-base font-extralight text-center">{item.description}</p>
            </div>
                )
            })}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-16 mt-10">
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaReact className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">React</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaAngular className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">Angular</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaSass className="text-2xl md:text-4xl lg:text-7xl" />
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaNode className="text-2xl md:text-4xl lg:text-7xl" />
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaVuejs className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">Vue.js</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaFigma className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">Figma</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaReact className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-xl">React Native</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaGitAlt className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">Git</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaHtml5 className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">HTML</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaCss3 className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">CSS</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaGithub className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">GitHub</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                    <FaJava className="text-2xl md:text-4xl lg:text-7xl" />
                    <p className="font-secondary hidden md:flex lg:text-4xl">Java</p>
                </div>
            </div>
        </section>
    )
}
