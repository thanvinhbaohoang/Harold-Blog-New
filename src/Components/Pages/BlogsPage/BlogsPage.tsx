import BlogCards from "../HomePage/BlogCards"
import SearchByTags from "../../SearchByTags"

export default function BlogsPage() {
    return(
        <div className="flex flex-col my-16 w-full items-center ">
                <div className="hero ">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                        <h1 className="text-sm font-bold text-teal-300">Showcase </h1>
                        <p className="py-6 text-5xl font-bold">Welcome to my Blog Posts.</p>
                        <p className="text-gray-500">Well not quite anything, like you can't read posts I have not completed. But you can definitely read the ones I had published :)</p>
                        </div>
                    </div>
                </div>
                
                <SearchByTags/>

                <div>

                </div>
                <BlogCards fullCard={false} cardsNum={12} />

      </div>

    )
}