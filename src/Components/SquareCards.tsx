import React, { useState } from "react";
import { db } from "../firebase-config";
import { useEffect } from "react";

function SquareCard({post}:{post:Blog}){
    
    return(
        <div className="hover:cursor-pointer transition hover:-translate-y-1 hover:brightness-125 hover:outline-2 hover:outline-dashed outline-amber-500 outline-offset-4  text-white flex flex-col bg-slate-700 p-6 rounded-lg">
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

            <p className="brightness-75">
                {post.content}
            </p>
        </div>
    )
}



import { collection, getDocs } from "firebase/firestore"; 

interface Blog {
    title: string;
    date: string;
    content: string;
    author: string;
}

export default function SquareCards(){
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
      const fetchBlogs = async () => {
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
      };
  
      fetchBlogs();
    }, []);
  
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            blogs.map((blog) => <SquareCard post={blog} />)
          }
      </div>

    )
}


