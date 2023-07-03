import React, { useState } from "react";
import { db } from "../firebase-config";
import { useEffect } from "react";

function SquareCard({post}:{post:Blog}){
    
    return(
        <div className="hover:cursor-pointer h-[15vh]  transition hover:-translate-y-1 hover:brightness-125 hover:outline-2 hover:outline-dashed outline-amber-500 outline-offset-4  text-white flex flex-col bg-slate-700 p-6 rounded-lg">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold">
                    {post.title}
                </h1>
                <p className="brightness-75">
                    {post.date}
                </p>
            </div>
            <p>
                {post.author}
            </p>

            <p className="brightness-75 truncate">
                {post.content}
            </p>
        </div>
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
            <div className="grid grid-cols-1 gap-6">
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


