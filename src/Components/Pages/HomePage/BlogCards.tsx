import React, { ComponentProps, useState } from "react";
import { db } from "../../../firebase-config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLightning } from "react-icons/bs";

function BlogCard({post}:{post:Blog}){
    return(
       <Link to = "/blog">
                <div class="overflow-hidden h-64 bg-white  hover:scale-[102%]  
                    hover:outline hover:outline-2 outline-offset-2 outline-amber-300 transition 
                    active:translate-y-1 active:shadow-sm hover:bg-slate-700 rounded-xl shadow-gray-900
                    border-gray-200 flex  items-center shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="w-1/3  rounded-xl h-full">
                        <img class="w-full rounded-xl h-full object-cover" src="https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg" alt="Sunset in the mountains"></img>
                    </div>

                    <div class="px-8 py-6 flex flex-col h-full justify-between w-full gap-2">
                        <div class="font-bold text-2xl mb-2">{post.title}</div>
                        <p class="text-gray-400 text-base"> {post.content}</p>
                        <p className="text-lg ">        {post.date} </p> 
                    </div>

 
                </div>
       </Link>
    )
}
function BlogStrip({post}:{post:Blog}){
    return(
        <Link to = "/blog">
        <div class="overflow-hidden group bg-white  hover:scale-[102%]  
             transition p-2
            active:translate-y-1 active:shadow-sm  rounded-xl 
            border-gray-200 flex  flex-col items-center  dark:bg-gray-800 ">

            <div className="h-[24em] ">
                <img class="w-full transition group-hover:outline-double outline-offset-4 outline-amber-400 outline-4 rounded-lg h-full object-cover" src="https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg" alt="Sunset in the mountains"></img>
            </div>
            
            <div class="py-6 flex flex-col h-full justify-between w-full gap-2">
                <p className="text-lg font-md text-gray-400">        {post.date} </p> 
                <div class="font-bold text-2xl mb-2">{post.title}</div>
                {/* <p class="text-gray-400 text-base"> {post.content}</p> */}
            </div>


        </div>
</Link>
    )
}


import { collection, getDocs } from "firebase/firestore"; 
import { render } from "react-dom";

interface Blog {
    title: string;
    date: string;
    content: string;
    author: string;
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
  
    const renderCards = () => {
        return (
            <div className="grid grid-cols-1  gap-10">
           {blogs.slice(0,prop.cardsNum).map((blog) => <BlogCard post={blog} />)}
        </div>
        )
    }
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


