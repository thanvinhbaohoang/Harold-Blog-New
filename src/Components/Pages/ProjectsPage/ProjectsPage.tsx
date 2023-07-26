import ProjectCards from "../HomePage/ProjectCards"

export interface Project {
    title: string;
    date: string;
    content: string;
    author: string;
    featured?: boolean;
    imageURL?: string;
    demoURL?: string;
    sourceURL?: string;
    tags?: string[];
}



export default function ProjectsPage() {
    return(
        <div className="flex flex-col  items-center ">
            <ProjectCards cardsNum={10}/>
      </div>

    )
}