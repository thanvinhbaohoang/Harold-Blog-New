import React, { ComponentProps, useState } from "react";
import { db } from "../../../firebase-config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLightning } from "react-icons/bs";

function BlogCard({post}:{post:Blog}){
    return(
       <Link to = "/blog">
                <div class="overflow-hidden h-[100%] bg-white border hover:scale-[102%]  
                    hover:outline hover:outline-2 outline-offset-2 outline-amber-300 transition 
                    active:translate-y-1 active:shadow-sm  
                    border-gray-200 rounded-md flex flex-col items-center shadow dark:bg-gray-800 dark:border-gray-700">

                            
                    <img class="w-full" src="https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg" alt="Sunset in the mountains"></img>
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
                <div class="overflow-hidden w-[100%] h-[100%] rounded-md border-b border-opacity-50 border-gray-600 hover:bg-gray-600   hover:scale-[102%]  
                    opacity-75 hover:opacity-100 transition 
                    active:translate-y-1 active:shadow-sm  px-2
                    flex flex-col items-center shadow">

                            
                    <div class="py-4 flex items-center h-full justify-between w-full gap-2">
                        <div class="font-medium text-xl">{post.title}</div>
                        {/* <p class="text-gray-400 text-base"> {post.content}</p> */}
                        <p className="text-base font-bold text-amber-400 ">        {post.date} </p> 
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

export default function BlogCards(prop: { fullCard: boolean }){
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
            <div className="grid grid-cols-2  gap-4">
           {blogs.map((blog) => <BlogCard post={blog} />)}
        </div>
        )
    }
    const renderStrips = () => {
        return (
            <div className="w-full grid grid-cols-1 ">
           {blogs.map((blog) => <BlogStrip post={blog} />)}
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

        return (
            <div>
                FUCK ME
            </div>
        )
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

        <div className="flex flex-col w-full items-center justify-items-center">        
          {loading? (
           renderLoadingSpinner()
          ) :(styleToRender())} 
          
      </div>

    )
}


