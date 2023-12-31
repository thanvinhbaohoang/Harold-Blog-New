import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import BlogsSection from "./BlogsSection";
import ContactSection from "./ContactSection";


export default function Home() {
    
    return(
        <div className="flex w-full flex-col items-center gap-24 ">
            <HeroSection/>
            <ProjectsSection/>
            <BlogsSection/>
            <ContactSection/>
      </div>

    )
}