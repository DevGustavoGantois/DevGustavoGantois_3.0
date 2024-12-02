import { useLanguage } from "@/context/language-context";
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";
import { pt } from "@/data/languages/pt-br";
import { CircleArrowRight } from "lucide-react";
import { FaCheckDouble } from "react-icons/fa";

export function HomeExperiences() {
    const { language } = useLanguage();

  const experiencesData =
    language === "pt"
      ? pt.homeExperiencesData
      : language === "en"
      ? en.homeExperiencesData
      : fr.homeExperiencesData;

    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40">
    {experiencesData.map((item, index) => (
        <div className="flex justify-center items-center flex-col gap-1" key={index}>
            <h1 className="text-center font-primary text-white text-6xl">{item.title}</h1>
            <p className="text-center font-secondary text-white text-sm lg:text-base">{item.description}</p>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
    {item.experiences.map((experience, expIndex) => (
                <div
                    key={expIndex}
                    className='bg-black text-white p-6 lg:p-12 rounded-md w-full border relative transition-all duration-700 hover:animate-bounce '>
                    <h2 className="font-primary text-center lg:text-start text-4xl mb-4">
                        {experience.title}
                    </h2>
                    <h3 className="font-secondary font-medium text-center lg:text-start mb-4">
                        {experience.position}
                    </h3>
                    <p className="text-secondary text-center lg:text-start text-sm lg:text-base text-gray-300">
                        {experience.description}
                    </p>
                    <div className="bg-white p-2 rounded-full w-8 text-black mt-10 items-center absolute -top-6 right-3">
                        <FaCheckDouble />
                    </div>
                </div>
            ))}
        </div>
        </div>
    ))}
</section>
    )
}