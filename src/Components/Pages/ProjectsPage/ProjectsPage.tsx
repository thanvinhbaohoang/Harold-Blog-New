import ProjectCards from "../HomePage/ProjectCards"

export default function ProjectsPage() {
    return(
        <div className="flex flex-col  items-center ">
            
            <section class="bg-white  dark:bg-indigo-800 p-4 mb-10 rounded-lg">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                CashStream
                            </h1>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
                                Check out some of my latest projects.
                            </p>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                                I've worked at start-ups, tech companies and Open-Source projects, including websites, apps and designs.
                            </p>
                        
                    </div>

                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                    </div>                
                </div>
            </section>

            <section class="bg-white  dark:bg-emerald-800 p-4 mb-10 rounded-lg">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                BlockStay
                            </h1>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
                                Check out some of my latest projects.
                            </p>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                                I've worked at start-ups, tech companies and Open-Source projects, including websites, apps and designs.
                            </p>
                        
                    </div>

                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                    </div>                
                </div>
            </section>

            <section class="bg-white  dark:bg-green-900 p-4 mb-10 rounded-lg">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                DartMart
                            </h1>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
                                Check out some of my latest projects.
                            </p>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                                I've worked at start-ups, tech companies and Open-Source projects, including websites, apps and designs.
                            </p>
                        
                    </div>

                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                    </div>                
                </div>
            </section>
         
            <h1 className="font-bold self-start text-4xl mb-6">Other Projects</h1>
            <ProjectCards/>
      </div>

    )
}