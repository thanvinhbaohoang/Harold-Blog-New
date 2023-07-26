import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { Project } from './ProjectsPage'

export default function FeaturedProject({Project}:{Project:Project}) {
    return (
  <section className="z-10 transition cursor-pointer 
              hover:bg-indigo-600   hover:bg-opacity-20 
              group  hover:shadow-xl bg-indigo-800 bg-opacity-10
              backdrop-opacity-5 backdrop-blur-3xl
              p-4 mb-10 rounded-3xl">
                  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                      <div className="mr-auto place-self-center lg:col-span-7">
                              <h1 className="max-w-2xl mb-4 
                              text-4xl font-extrabold 
                              tracking-tight leading-none 
                              md:text-5xl xl:text-6xl 
                              dark:text-white
                              group-hover:text-emerald-400 group-hover:scale-[101%]
                              transition">
                                  {Project.title}
                              </h1>
                              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
                                  {Project.content}
                              </p>
                              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                                  I've worked at start-ups, tech companies and Open-Source projects, including websites, apps and designs.
                              </p>
                              
                              <div className="flex gap-6">
                                  <button className="grey-button flex items-center gap-2"> 
                                      <FaGithub/> GitHub 
                                  </button>
                                  <button className="grey-button flex items-center gap-2"> 
                                      <FiExternalLink/> Site 
                                  </button>
                                 
                              </div>
  
                              <div className="flex h-14 text-sm my-10 gap-2">
                                  <button className="rounded-full px-6 font-bold bg-emerald-400 text-emerald-200 bg-opacity-10">
                                      NodeJS
                                  </button>
                                  <button className="rounded-full px-6 font-bold bg-emerald-400 text-emerald-200 bg-opacity-10">
                                      Tailwind
                                  </button>
                                  <button className="rounded-full px-6 font-bold bg-emerald-400 text-emerald-200 bg-opacity-10">
                                      TypeScript
                                  </button>
                                  
                              </div>
                              
                      </div>
  
                      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                      </div>                
                  </div>
              </section>  
              )
  }
  