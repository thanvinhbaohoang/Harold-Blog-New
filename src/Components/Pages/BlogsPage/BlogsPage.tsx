import BlogCards from "../HomePage/BlogCards"
import SearchByTags from "../../SearchByTags"

export default function BlogsPage() {
    return(
        <div className="flex flex-col w-full items-center ">
                <SearchByTags/>
                <BlogCards/>
      </div>

    )
}