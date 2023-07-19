import BlogContent from "./BlogContent"
import BlogContentScroll from "../BlogContentScroll"


export default function BlogPage(){

    return(
           <div className="flex w-full mt-10 ">
                <div className=" border-gray-500 gap-4 flex border-opacity-50 rounded-lg">
                    <BlogContent/>

                    <div className=" w-1/2 flex flex-col gap-6">
                        
                        <div className="border p-6 text-base flex flex-col border-gray-600 bg-gray-800 gap-4 rounded-lg">
                            <h1 className="text-lg font-bold">About Me</h1>
                                <img className="w-24 h-24  rounded-lg" src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/298841264_802905871121966_6082265023474547667_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UVO_5nODTeUAX-Cyy6v&_nc_ht=scontent-bos5-1.xx&oh=00_AfA-P850rXQ73o-qf-c1dcxfUw2ehRoKWmCJtZtpItDzig&oe=64BAA7B9" ></img>
                            <p>
                                Hello and thanks for visiting! My name is Harold Than, and this is my website and digital garden. 🌱
                               
                               <br/><br/>I'm a software developer who creates open-source projects and writes about code, design, and life. This site is and has always been free of ads, trackers, social media, affiliates, and sponsored posts.
                            </p>
                        </div>

                        <div className="border p-4 flex flex-col border-gray-600 bg-gray-800 gap-4 rounded-xl">
                            <h1 className="text-lg font-bold">Post Details</h1>
                                <p className="text-base opacity-70">Published 2022</p>
                            
                            <h1 className="text-lg font-bold">Categories</h1>
                            <p className="text-base opacity-70">Developer</p>

                            <h1 className="text-lg font-bold">Tags</h1>
                                <ul className="flex gap-2 text-base ">
                                    <li className="tag-bubble ">Mycology</li>
                                    <li className="tag-bubble">Brewing</li>
                                </ul>

                            
                        </div>
                    </div>


                </div>
                
           </div>
             
    )
}