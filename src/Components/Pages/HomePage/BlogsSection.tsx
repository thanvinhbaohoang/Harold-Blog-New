import SearchByTags from "../../SearchByTags";
import SquareCards from "./BlogCards";


export default function BlogsSection() {
    return (
        <section className="w-full">
                <SearchByTags/>
                <SquareCards/>     
            </section>
    )
}