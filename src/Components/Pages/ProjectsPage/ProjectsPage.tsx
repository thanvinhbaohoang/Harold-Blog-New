import ProjectCards from "../HomePage/ProjectCards"
import { FaGithub} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import FeaturedProject from "./FeaturedProject";

export default function ProjectsPage() {
    return(
        <div className="flex flex-col  items-center ">
            
            <FeaturedProject/>

         
           
         
            <h1 className="font-bold self-start text-4xl mb-6">Other Projects</h1>
            <ProjectCards/>
      </div>

    )
}