export function HomeExperiences() {
    return (
        <section className="max-w-[1500px] p-6 lg:p-0 mx-auto mt-20 lg:mt-40">
            <div className="flex justify-center items-center flex-col gap-1">
                <h1 className="text-center font-primary text-white"></h1>
                <p className="text-center font-secondary text-white"></p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 ">
                <div className="bg-white p-6 lg:p-12 rounded-md w-full text-black">
                    <h1 className="font-primary text-center lg:text-start text-2xl"></h1>
                    <h2 className="font-secondary font-medium text-center lg:text-start"></h2>
                    <p className="text-secondary text-center lg:text-start"></p>
                </div>
                <div className="bg-black p-6 lg:p-12 rounded-md border text-white w-full">
                    <h1 className="font-primary text-center lg:text-start text-2xl"></h1>
                    <h2 className="font-secondary font-medium text-center lg:text-start"></h2>
                    <p className="text-secondary text-center lg:text-start"></p>
                </div>
                <div className="bg-black p-6 lg:p-12 rounded-md border text-white w-full">
                <h1 className="font-primary text-center lg:text-start text-2xl"></h1>
                <h2 className="font-secondary font-medium text-center lg:text-start"></h2>
                <p className="text-secondary text-center lg:text-start"></p>
                </div>
                <div className="bg-white p-6 lg:p-12 rounded-md w-full text-black">
                <h1 className="font-primary text-center lg:text-start text-2xl"></h1>
                <h2 className="font-secondary font-medium text-center lg:text-start"></h2>
                <p className="text-secondary text-center lg:text-start"></p>
                </div>
            </div>
        </section>
    )
}