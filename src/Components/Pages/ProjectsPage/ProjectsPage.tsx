import ProjectCards from "../HomePage/ProjectCards"

export default function ProjectsPage() {
    return(
        <div className="flex flex-col w-[100%]  items-center ">
            <h1 className="font-bold text-4xl">Projects</h1>
            <ProjectCards/>
      </div>

    )
}