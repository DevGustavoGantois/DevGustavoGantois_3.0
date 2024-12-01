import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HomeAbout() {
  return (
    <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
        <article className="flex flex-col gap-1">
            <h1 className="font-primary text-white"></h1>
            <p className="font-secondary font-extralight"></p>
            <div className="flex flex-col lg:flex-row justify-center gap-6">
                <Button variant="primary_port"></Button>
                <Button variant="secondary_port">Download CV</Button>
            </div>
        </article>
        <figure>{/*<Image src="" width={400} height={400} alt="" />*/}</figure>
      </div>
    </section>
  );
}
