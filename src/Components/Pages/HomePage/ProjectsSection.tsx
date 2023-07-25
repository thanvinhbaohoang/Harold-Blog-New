
import FeaturedProject from "../ProjectsPage/FeaturedProject";
import PostCards from "./ProjectCards";
import { Link } from "react-router-dom";

export default function ProjectsSection(){
    return(
        <section className="w-full">
        
        <div className="flex flex-col gap-6">
            <h1 className="font-bold text-4xl">Featured </h1>
            <FeaturedProject/>
        </div>

        <div className="flex items-center  mb-10 justify-between">
        <h1 className="font-bold text-4xl">Other Projects</h1>
            <Link to="/projects">
                <button className="grey-button">
                    View all
                </button>
            </Link>
        </div>
        <PostCards cardsNum={6}/>
    </section>
    )
}