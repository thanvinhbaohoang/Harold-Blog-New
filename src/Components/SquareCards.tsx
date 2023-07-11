import React, { useState } from "react";
import { db } from "../firebase-config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function SquareCard({post}:{post:Blog}){

    return(
       <Link to = "/blog">
            <div className="w-full">
                <div className="flex gap-2 items-center mb-2 ">
                    <div className="w-[30px] h-[30px]  rounded-full bg-black"></div>
                   <div> {post.author}</div>


                    <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        <svg class="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                        </svg>
                        {post.date}
                    </span>
                    
                    <div className="flex gap-2 text-sm ">
                       
                        <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-amber-600 dark:text-gray-300">
                            Blockchain
                        </span>
                        <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                            Libertarian
                        </span>
                    </div>
                </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg" alt="" />
                </a>

                <div class="p-5">
                    <a href="#">
                        <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </a>
                   


                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {post.content}    
                    </p>

                    <div className="flex gap-2">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            1250 Sats
                            
                        </a>

                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            31 Comments
                           
                        </a>
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
    date: string;
    content: string;
    author: string;
}

export default function SquareCards(){
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
            <div className="grid grid-cols-1 gap-24">
           {blogs.map((blog) => <SquareCard post={blog} />)}
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
        <div className="flex flex-col items-center justify-items-center">
          {loading? (
           renderLoadingSpinner()
          ) :(renderCards())} 
          
      </div>

    )
}


