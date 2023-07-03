import NavBar from "./navbar"
import PostCards from "./Components/PostCards"
import SquareCards from "./Components/SquareCards"
import Categories from "./Components/Categories"
import Footer from "./Components/Footer"
import { useState } from "react"
import { Modal } from "./Components/Modal"
import {BrowserRouter, Routes , Route } from "react-router-dom" 
import NotFound from "./Pages/NotFound"
import BlogPage from "./Pages/BlogPage"

import Home from "./Pages/Home"
export default function App() {

  return (
    <div className="bg-slate-800 h-[100vh]">
      <div className=" flex flex-col gap-10 items-center justify-center bg-slate-800">
            <NavBar />
            
            <div className="w-[80vw]  lg:w-[40vw] flex flex-col gap-10 text-white ">
            
              
              <Routes> 
                <Route path="/" element={<Home/> } /> 
                <Route path="/blog" element={<BlogPage/> } /> 
                <Route path="/no" element={<NotFound/> } /> 
              </Routes> 

              <Footer/>


            </div>


      </div>
    </div>
    
  )
}