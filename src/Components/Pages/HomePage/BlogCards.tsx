import React, { ComponentProps, useState } from "react";
import { db } from "../../../firebase-config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLightning } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function BlogStrip({post}:{post:Blog}){
    return(
        <Link to = "/blog">
        <div class="overflow-hidden group  shadow-md hover:scale-[102%]  
             transition hover:shadow-2xl hover:shadow-gray-900
            active:translate-y-1 active:shadow-sm  rounded-xl 
            flex  flex-col items-center   border-opacity-10">

                <img class="w-full h-[16em] transition 
                rounded-lg object-cover" src={post.imageURL}></img>
            
            <div class="py-6 px-4  rounded-lg flex flex-col h-full justify-between w-full gap-2">
                <div className="flex gap-2">
                    <p className="text-xl font-bold text-amber-300 font-base"> {post.category} </p> 
                    <p className="text-lg font-md text-gray-300">   -    {post.date} </p> 
                </div>

                <div class="font-bold text-2xl mb-2">{post.title}</div>
                <p class="text-gray-400 text-base"> {post.content}</p>
                <div className=" text-teal-400 text-lg font-thin flex items-center gap-2">
                    Read Post 
                    <div className="group-hover:translate-x-2  transition">
                        <BsArrowRight/>
                    </div>
                </div>
            </div>


        </div>
</Link>
    )
}


import { collection, getDocs } from "firebase/firestore"; 
import { render } from "react-dom";

interface Blog {
    title: string;
    category: string;
    date: string;
    content: string;
    author: string;
    imageURL?: string;
}

export default function BlogCards(prop: { fullCard: boolean, cardsNum: number }){
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        setLoading(true);
        try {
          const blogsCollectionRef = collection(db, 'blogs');
          const snapshot = await getDocs(blogsCollectionRef);
  
          const fetchedBlogs: Blog[] = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data() as Blog
          }));
  
          setBlogs(fetchedBlogs);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }

        setLoading(false)
      };
  
      fetchBlogs();
    }, []);
  

    const renderStrips = () => {
        return (
            <div className="w-full grid grid-cols-3 gap-6  auto-cols-auto auto-rows-fr">
           {blogs.slice(0,prop.cardsNum).map((blog) => <BlogStrip post={blog} />)}
        </div>
        )
    }   
    
    const styleToRender =() => {
        console.log(prop.fullCard)
        if (prop.fullCard) {

            return renderCards()
        } else {
            return renderStrips()
        }
    }
    
    const renderLoadingSpinner = () => {
        return (   
            <div role="status" className="w-full p-4 space-y-24 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
        
        )
    }


    return (

        <div className="flex flex-col w-[100%] ">        
          {loading? (
           renderLoadingSpinner()
          ) :(styleToRender())} 
          
      </div>

    )
}


