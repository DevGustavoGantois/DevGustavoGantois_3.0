import Image from "next/image";

export function HomeContact() {
    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-10 lg:mt-40">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
                <article>
                    <h1 className="font-primary text-2xl text-white">aaaaaa</h1>
                    <div className="flex justify-center lg:justify-start">
                    <p className="font-secondary font-light max-w-[600px] text-center lg:text-start text-white">
                    
                    </p>
                    </div>
                </article>
                <figure>
                    <Image src="/ContactImg.svg" width={700} quality={100} height={700} alt="" className="animate-pulse" />
                </figure>
            </div>
            <div className="mt-20 flex justify-center items-center animate-pulse">
                <Image src="/CTAContactImg.svg" width={900} height={600} alt="" className="w-full" />
            </div>
        </section>
    )
}