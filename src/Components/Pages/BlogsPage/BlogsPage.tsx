import BlogCards from "../HomePage/BlogCards"
import SearchByTags from "../../SearchByTags"

export default function BlogsPage() {
    return(
        <div className="flex flex-col my-16 w-full items-center ">
                <div class="hero ">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                        <h1 class="text-sm font-bold text-teal-300">Showcase </h1>
                        <p class="py-6 text-5xl font-bold">Welcome to my Blog Posts.</p>
                        <p className="text-gray-500">Well not quite anything, like you can't build a spaceship with it. But you can definitely build the website for the spaceship —</p>
                        </div>
                    </div>
                </div>
                
                <SearchByTags/>

                <div>

                </div>
                <BlogCards fullCard={false} cardsNum={10} />
                {/* <BlogCards fullCard={true} /> */}

      </div>

    )
}