import React from "react";

type Post = {
    title: string;
    date: string;
    content: string;
    author: string;
}


function PostCard({post}:{post:Post}){
    return(
        <div className="justify-end hover:cursor-pointer hover:outline-2 hover:outline-dashed outline-amber-500 outline-offset-4   transition hover:-translate-y-1 hover:brightness-125 text-white flex flex-col bg-slate-700 py-10 px-6 rounded-lg">
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



const posts:Post[]=[
    {
        title: "Libertarian stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    }   


]
export default function PostCards(){
    return (
        <div className=" h-[60vh] grid grid-cols-1">
          {
            posts.map((post) => <PostCard post={post} />)
          }
      </div>
    )
}


