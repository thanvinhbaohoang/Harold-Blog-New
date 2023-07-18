
import PostCards from "./ProjectCards";


export default function ProjectsSection(){
    return(
        <section>
        <div className="flex items-center  mb-10 justify-between">
            <h1 className="font-bold text-4xl">Projects</h1>
            <button className="grey-button">
                View all
            </button>
        </div>
        <PostCards/>
    </section>
    )
}