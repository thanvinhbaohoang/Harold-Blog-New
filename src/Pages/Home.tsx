import React, { useState } from "react";
import SquareCards from "../Components/SquareCards";
import Categories from "../Components/Categories";

export default function Home() {
    
    return(
        <div className="flex flex-col w-full gap-4">
            <h1 className="font-bold text-3xl text-white"> All Posts</h1>
            <Categories/>
            <SquareCards/>     
      </div>

    )
}