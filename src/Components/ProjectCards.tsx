import React from "react";
import { FiExternalLink } from 'react-icons/fi';

type Project = {
    title: string;
    date: string;
    content: string;
    author: string;
}


function ProjectCard({Project}:{Project:Project}){
    return(
        
        <div>
            <a href="#" class="flex flex-col items-center p-6 bg-gray-800
                        border transition border-gray-700 rounded-lg 
                        shadow md:flex-row md:max-w-xl bg-slate-800">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <p className="text-xl text-amber-400"> {Project.date}</p>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {Project.title}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {Project.content}
                    </p>
                    
                    
                    <div className="flex gap-4">
                        <button className="grey-button flex items-center gap-2 ">
                            Demo <FiExternalLink size={16}/>
                        </button>

                        <button className="grey-button flex items-center gap-2 bg-pink-500">
                            Source <FiExternalLink size={16}/>
                        </button>
                    </div>
                
                </div>

                
            </a>
            
        </div>

    )
}



const Projects:Project[]=[
    {
        title: "CashStream", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "EtherStream", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },{
        title: "DartMart", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },{
        title: "BlockStay", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    


]
export default function ProjectCards(){
    return (
        <div className=" h-[60vh] grid grid-cols-2 gap-4">
            
          {
            Projects.map((Project) => <ProjectCard Project={Project} />)
          }
      </div>
    )
}


