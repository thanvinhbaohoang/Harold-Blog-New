import React from "react";

type Post = {
    title: string;
    date: string;
    content: string;
    author: string;
}


function SquareCard({post}:{post:Post}){
    return(
        <div className="hover:cursor-pointer transition hover:-translate-y-1 hover:brightness-125 text-white flex flex-col bg-slate-700 p-6 rounded-lg">
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
        title: "Blockchain stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "Gun stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "Mushie stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "Coding stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "Guitar stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "Libertarian stuffs", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever. Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    }   


]
export default function SquareCards(){
    return (
        <div className="grid grid-cols-2 gap-6">
          {
            posts.map((post) => <SquareCard post={post} />)
          }
      </div>
    )
}


