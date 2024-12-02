import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { useLanguage } from "@/context/language-context";
  import { en } from "@/data/languages/en";
  import { fr } from "@/data/languages/fr";
  import { pt } from "@/data/languages/pt-br";
import { Star } from "lucide-react";
  
  export function HomeTestimonials() {
    const { language } = useLanguage();
  
    const testimonialsData =
      language === "pt"
        ? pt.homeTestimonialsData
        : language === "en"
        ? en.homeTestimonialsData
        : fr.homeTestimonialsData;
  
    return (
      <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40">
        {testimonialsData.map((section, sectionIndex) => (
          <div
            className="flex justify-center items-center flex-col"
            key={sectionIndex}
          >
            <h1 className="font-primary text-white text-5xl lg:text-6xl">
              {section.title}
            </h1>
            <div className="mt-20 w-full">
              <Carousel>
                <CarouselContent>
                  {section.testimonials.map((testimonial, index) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                      <div className="text-center p-6 border border-white/20 w-full h-full rounded-lg">
                        <h3 className="text-lg font-semibold text-white font-seocndary">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm mt-2 text-gray-300 font-secondary">
                          {testimonial.testimonial}
                        </p>
                        <div className="flex justify-center gap-1 mt-6 text-white">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                          </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        ))}
      </section>
    );
  }
  