import BlogContent from "./BlogContent"
import BlogContentScroll from "../BlogContentScroll"


export default function BlogPage(){

    return(
           <div className="flex w-[50vw] ">
                <div className="border border-gray-500 border-opacity-50 rounded-lg p-10">
                    <BlogContent/>
                </div>
                
           </div>
             
    )
}