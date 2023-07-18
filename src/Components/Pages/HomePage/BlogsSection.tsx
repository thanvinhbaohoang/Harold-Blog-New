import SearchByTags from "../../SearchByTags";
import BlogCards from "./BlogCards";


export default function BlogsSection() {
    return (
        <section className="w-full">
                <SearchByTags/>
                <BlogCards/>     
            </section>
    )
}