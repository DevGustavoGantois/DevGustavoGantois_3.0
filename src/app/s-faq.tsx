import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/context/language-context"
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";
import { pt } from "@/data/languages/pt-br";

export function HomeFAQ() {

    const { language } = useLanguage();

    const faqData = 
    language === 'pt'
    ? pt.homeFAQData
    : language === 'en'
    ? en.homeFAQData 
    : fr.homeFAQData

    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto -mb-40 lg:mb-0">
            {faqData.map((item, index) => {
                return (
                    <div className="flex flex-col justify-center gap-1 mt-20 lg:mt-52" key={index}>
                    <h1 className="font-primary text-white text-center text-5xl lg:text-6xl">{item.title}</h1>
                    <p className="text-white font-secondary text-center text-xl lg:text-2xl">{item.subtitle}</p>
                    <div>{item.questionsAndAnswers.map((item, index) => {
                        return (
                            <Accordion type="single" collapsible key={index} className="text-white p-6 font-secondary">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-gray-400">
                                    {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )
                    })}</div>
                </div>
                )
            })}
        </section>
    )
}
