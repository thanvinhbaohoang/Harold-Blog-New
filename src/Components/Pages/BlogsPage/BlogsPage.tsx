import BlogCards from "../HomePage/BlogCards"
import SearchByTags from "../../SearchByTags"

export default function BlogsPage() {
    return(
        <div className="flex flex-col w-full items-center ">
                <SearchByTags/>

                <div>

                </div>
                <BlogCards fullCard={false} cardsNum={10} />
                {/* <BlogCards fullCard={true} /> */}

      </div>

    )
}