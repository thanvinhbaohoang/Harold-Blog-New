// import SearchByTags from "../../SearchByTags";
import BlogCards from "./BlogCards";
import { Link } from "react-router-dom";

export default function BlogsSection() {
    return (
        <section className="w-full">
                <div className="flex items-center  mb-10 justify-between">
                    <h1 className="font-bold text-4xl">Blogs</h1>
                    <Link to="/blogs">
                        <button className="grey-button">
                            View all
                        </button>
                    </Link>
                </div>
                <BlogCards fullCard={false} cardsNum={3} />
            </section>
    )
}