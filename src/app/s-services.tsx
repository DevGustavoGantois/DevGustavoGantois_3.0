import { useLanguage } from "@/context/language-context"
import { pt } from "@/data/languages/pt-br"
import { en } from "@/data/languages/en"
import { fr } from "@/data/languages/fr"
export function HomeServices() {
    
    const { language} = useLanguage();

    const serviceData = 
    language === 'pt'
    ? pt.homeServicesData
    : language === 'en' 
    ? en.homeServicesData
    : fr.homeServicesData

    return (
        <section>
            <div className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40">
                    {serviceData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-center lg:justify-start">
                                <h1 className="font-primary text-white text-center text-2xl lg:text-6xl lg:text-start">{item.title}</h1>
                                </div>
                                <div className="mt-20">
                            {item.services.map((service, index) => (
                                <div key={index} className="mt-20 border-b border-white/20 w-full  p-6">
                                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                                    <div className="flex flex-col lg:flex-row items-center gap-6">
                                    <p className="text-white/20 font-primary text-4xl lg:text-6xl">{service.number}</p>
                                    <h3 className="text-xl lg:text-4xl text-white font-secondary mb-4 lg:mb-0">{service.name}</h3>
                                    </div>
                                    <p className="text-white text-sm lg:text-base max-w-[300px] text-center">{service.description}</p>
                                </div>
                                </div>
                            ))}
                            </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}