import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa'
import { Project } from '../ProjectsPage/ProjectsPage';



function FeaturedProject({Project}:{Project:Project}) {
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
                            <p className="max-w-2xl font-light text-indigo-300 lg:mb-8 md:text-lg lg:text-2xl ">
                                Ethereum
                            </p>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                            {Project.content}
                            </p>
                            
                            <div className="flex gap-6">
                                <a href={Project.sourceURL? Project.sourceURL :"https://github.com/thanvinhbaohoang"} target="_blank" >
                                    <button className="grey-button flex items-center gap-2"> 
                                        <FaGithub/> GitHub 
                                    </button>
                                </a>
                                <a href={Project.demoURL? Project.demoURL :"https://github.com/thanvinhbaohoang"} target="_blank" >
                                    <button className="grey-button flex items-center gap-2"> 
                                        <FiExternalLink/> Site 
                                    </button>
                                </a>
                               
                            </div>

                            <div className="hidden lg:flex h-14 text-sm my-10 gap-2">
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
            </section>  )
}


function ProjectCard({Project}:{Project:Project}){
    return(
    
            <a href="#" className="flex flex-col items-center p-4 bg-gray-800
                        border transition border-gray-700 rounded-lg 
                        outline-white hover:scale-[101%]
                        hover:outline-amber-400 hover:outline-double outline-4 outline-offset-2 
                        shadow">
                <div className="flex flex-col justify-between p-4 w-full">
                    <p className="text-base text-amber-400"> {Project.date}</p>
                    <h5 className="mb-2 text-xl hover-underline transition font-bold tracking-tight text-gray-900 dark:text-white">
                        {Project.title}
                    </h5>
                    <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">
                        {Project.content}
                    </p>
                    
                    
                    <div className="flex gap-4">

                        <a className={Project.demoURL? "flex" : "hidden"}
                        href={Project.demoURL? Project.demoURL:"https://github.com/thanvinhbaohoang"} target="_blank" >
                            <button className="grey-button flex items-center gap-2 ">
                                Demo <FiExternalLink size={16}/>
                            </button>
                        </a>

                        <a className={Project.sourceURL? "flex" : "hidden"}
                        href={Project.sourceURL? Project.sourceURL: "https://github.com/thanvinhbaohoang"} target="_blank" >
                            <button className="grey-button flex items-center gap-2 bg-amber-600">
                                Source <FiExternalLink size={16}/>
                            </button>
                        </a>

                    </div>
                
                </div>

                
            </a>
            
    )
}



const Projects:Project[]=[
    {
        title: "CashStream", 
        date: "2021-10-10",
        content: "One easy-to-navigate dashboard to wrap tokens, send streams, and manage recurring crypto payments", 
        demoURL: "https://cashstreamcrypto.com/",
        sourceURL: "https://github.com/thanvinhbaohoang/CashStream"
    },
    {
        title: "BlockStay", 
        date: "2023",
        content: "Hotel Door Lock IOT Based project that authenticate using CashStream", 
        sourceURL: "https://github.com/thanvinhbaohoang/BlockStay",
        demoURL:"https://devpost.com/software/blockstay"

    },
   {
        title: "DartMart", 
        date: "2022",
        content: "A React Native mobile app for food delivery at Dartmouth College with DUO 2-FA Authentication", 
        sourceURL: "https://github.com/thanvinhbaohoang/project-dartmart"
    },
    {
        title: "Spectre Wallet", 
        date: "2022",
        content: "A Crypto Wallet Web-App and React-Native-App Designed and Implemented using Bitcore-lib", 
        sourceURL:"https://github.com/thanvinhbaohoang/spectre-wallet-web"
    },
    {
        title: "Is She Into You?", 
        date: "20212",
        content: "Pure CSS and HTML Card 'Game' Based On SimplyExplained's Youtube Video of the same name", 
        sourceURL:"https://github.com/thanvinhbaohoang/Is-She-Into-You-",
        demoURL:"https://is-she-into-you.onrender.com/"
    },{
        title: "Youtube Clone with Redux", 
        date: "2022",
        content: "Youtube Clone with Redux for state management.",
        demoURL:"https://sa5-youtubeclone-with-redux.onrender.com/" 
    },{
        title: "Ivy League Sentiments", 
        date: "2022",
        content: "Data Analysis through Web-Scraping Reddit and Twitter to get the general sentiments of each Ivy League College Online", 
    },
    {
        title: "Tiny Search Engine", 
        date: "2021",
        content: "Web Search Engine programmed in C with use of Crawler, Indexer and Querier", 
    },
    {
        title: "Sudoku Generator and Solver", 
        date: "2021-10-10",
        content: " A Sudoku Game Generator and Solver Program written in C", 
        
    },
    {
        title: "Boids Deep Sea Simulation", 
        date: "2022",
        content: "A Deep Sea VR Cage Diving Experience with Schools Of Fish behavior simulated with Boids Algorithm", 
    },{
        title: "Ad-VR-Tise", 
        date: "2022",
        content: " 3D Consensual Advertisement Model with Interactive UI for the mostly unexplored VR Metaverse ads space", 
    },{
        title: "GuitAR Hero", 
        date: "2022",
        content: "Learn to play real guitar through a Guitar Hero Game using Augmented Reality", 
    },
    {
        title: "Hidden Markov Tagger", 
        date: "2021",
        content: "An NLP Part-Of-Speech tagger that use State machine to categorize words ", 
    },
]


// import { useState } from "react";
export default function ProjectCards(prop: {cardsNum: number }){
    // const [loading, setLoading] = useState(false);
    // const [projects, setProjects] = useState<Project[]>([]);

    const renderFeatured = () => {
        return(
            <div>
            {
                Projects.slice(0,1).map((Project) => <FeaturedProject Project={Project} />)
            }
            </div>
           
        )
    }

    const renderOtherProjects= () => {
        return(
            <div className="grid z-10 grid-cols-1 lg:grid-cols-3 w-full gap-4">
                {
                    Projects.slice(1,prop.cardsNum+1).map((Project) => <ProjectCard Project={Project} />)
                }
            </div>
        )
    }


    return (
        <div className="z-10">
            {renderFeatured()}
          {renderOtherProjects()}
        </div>
    )
}


