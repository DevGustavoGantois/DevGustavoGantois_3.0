import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { pt } from "@/data/languages/pt-br";
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";

export function HomeAbout() {
  const { language } = useLanguage();

  const aboutData =
    language === "pt"
      ? pt.homeAboutData
      : language === "en"
      ? en.homeAboutData
      : fr.homeAboutData;

  return (
    <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
        {aboutData.map((item, index) => (
          <article className="flex flex-col justify-center gap-1" key={index}>
            <h1 className="font-primary text-white text-center lg:text-start text-2xl lg:text-4xl">
              {item.title}
            </h1>
            <p className="font-secondary font-extralight text-white max-w-[600px] text-sm lg:text-base">
              {item.description}
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start mt-5 gap-6">
              <Button variant="primary_port">{item.btnTextPrimary}</Button>
              <Button variant="secondary_port">{item.btnTextSecondary}</Button>
            </div>
          </article>
        ))}
        <figure>
          {/* <Image src="" width={400} height={400} alt="" /> */}
        </figure>
      </div>
    </section>
  );
}
