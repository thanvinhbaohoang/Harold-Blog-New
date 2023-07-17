import React from "react";



interface Tag {
    tag: string;
}



export default function SearchByTags(){
    const tagBubble = () => {
        return (
            <div className="border rounded-full">

            </div>
        )
    }
    return (
    <div className="">
        <h1 className="text-2xl font-bold"> Search blog by topics</h1>

        <ul className="flex gap-2 text-sm my-4">
            <li className="tag-bubble"> Blockchain</li>
            <li className="tag-bubble"> Mycology</li>
            <li className="tag-bubble"> Brewing</li>
            <li className="tag-bubble"> Philosophy</li>
            <li className="tag-bubble"> FOSSCAD</li>

        </ul>

    </div>
    )
}


