import React from "react";



interface Tag {
    tag: string;
}



export default function SearchByTags(){
   
    return (
    <div className="flex flex-col w-[100%] gap-2 my-4">
        <div className="flex items-center justify-between">
        <h1 className="text-4xl my-6 font-bold"> Blogs</h1>
        <button className="grey-button">
            View all
        </button>
        </div>
        <ul className="flex gap-2 text-sm">
            <li className="tag-bubble"> Blockchain</li>
            <li className="tag-bubble"> Mycology</li>
            <li className="tag-bubble"> Brewing</li>
            <li className="tag-bubble"> Philosophy</li>
            <li className="tag-bubble"> FOSSCAD</li>

        </ul>

    </div>
    )
}


