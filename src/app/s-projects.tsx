import { useLanguage } from "@/context/language-context";
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";
import { pt } from "@/data/languages/pt-br";

export function HomeProjects() {
    const { language } = useLanguage();

    const projectsData = 
    language === 'pt' 
    ? pt.homeProjectsData
    : language === 'en'
    ? en.homeProjectsData 
    : fr.homeProjectsData;


    return (
        <section className="bg-white p-6 lg:p-12 mt-20 lg:mt-40" id="Projects">
            <div className="max-w-[1500px] p-6 lg:p-0 mx-auto">
            {projectsData.map((item, index) => (
          <div
            className="flex md:flex-col gap-6 lg:flex-row justify-center lg:justify-between"
            key={index}
          >
            <div className="flex flex-col gap-2">
              <p className="text-black font-secondary text-sm font-extralight text-center lg:text-start">
                {item.pretitle}
              </p>
              <h1 className="text-black font-primary text-6xl text-center lg:text-start">
                {item.title}
              </h1>
              <p className="hidden md:flex text-black font-secondary font-medium text-4xl max-w-[500px]">
                {item.subtitle}
              </p>
            </div>
            <div className="flex flex-col justify-start">
            <div className="hidden md:flex flex-col gap-2 mt-0 lg:mt-4">
                <h1 className="text-black font-secondary font-medium text-5xl max-w-[400px]">{item.workDescription}</h1>
            </div>
            <div className="mt-10 flex gap-2 flex-col">
                {item.steps.map((step, index) => {
                    return (
                        <li key={index} className="text-black font-secondary text-sm">{step}</li>
                    )
                })}
            </div>
            </div>
          </div>
        ))}
                <main className="mt-20 mb-10">
                    <div className="flex gap-8 items-center">
                    <h1 className="text-black font-primary text-3xl lg:text-5xl">1. WEBSITES</h1>
                    <h1 className="text-black font-primary text-3xl lg:text-5xl">2. DESIGN UI/UX</h1>
                    </div>
                </main>
            </div>
        </section>
    )
}

