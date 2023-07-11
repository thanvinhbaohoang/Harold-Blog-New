import React, { useState } from "react";
import SquareCards from "../Components/SquareCards";
import Categories from "../Components/Categories";
import PostCards from "../Components/PostCards";
export default function Home() {
    
    return(
        <div className="flex w-[60vw] flex-col  items-center gap-4 ">

            
           <div className="flex w-full gap-2 mb-10">
                <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg w-full h-[20vh]">
                </div>
           </div>

            <div className="flex w-full  gap-4">

                <div className="  w-[25%] flex flex-col  border-slate-500  rounded-md gap-2 left-10">
                    <form>
                        <div class="flex rounded-sm">
                            <div class="relative w-full">
                                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search ..." required>
                            </input>

                                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <Categories/>
                </div>

                <div className="w-full">
                    <SquareCards/>     
                </div>

             
                
            </div>
      </div>

    )
}