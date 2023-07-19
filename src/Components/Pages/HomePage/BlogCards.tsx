import React, { useState } from "react";
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

                {/* <div class=" bg-white border hover:scale-[103%]  
                hover:outline hover:outline-2 outline-offset-2 outline-amber-300 transition 
                active:translate-y-1 active:shadow-sm  
                border-gray-200 rounded-lg flex flex-col items-center shadow dark:bg-gray-800 dark:border-gray-700">
                    
                    <img class="object-cover w-48 h-56  rounded-l-lg " src="https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg" alt="" />
  
                    <div class="p-5">
                   

                    <div className="h-28 overflow-hidden mb-10">
                    <h5 class=" text-2xl my-2 font-bold tracking-tight  text-gray-900 dark:text-white">{post.title}</h5>
                        <p className="opacity-50 text-md overflow-hidden my-4">{post.content}</p>

                    </div>
                        <div className="flex gap-2 items-center justify-between mb-2 ">

                            <div className="flex items-center gap-2">
                                <span class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                                <svg class="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                                </svg>
                                {post.date}</span>
                            </div>

                            
                            <div className="flex  gap-2 text-sm ">
                                <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-amber-600 dark:text-gray-300">
                                    Blockchain
                                </span>
                                <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                                    Libertarian
                                </span>
                            </div>
                        </div>
                        
                    </div>

                </div> */}
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

export default function BlogCards(){
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
          ) :(renderCards())} 
          
      </div>

    )
}


