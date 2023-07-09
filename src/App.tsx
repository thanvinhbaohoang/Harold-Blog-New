import NavBar from "./navbar"
import PostCards from "./Components/PostCards"
import SquareCards from "./Components/SquareCards"
import Categories from "./Components/Categories"
import Footer from "./Components/Footer"
import { useState } from "react"
import { Modal } from "./Components/Modal"
import {BrowserRouter, Routes , Route } from "react-router-dom" 
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import BlogPage, { BlockPage } from "./Pages/BlogPage"
import MarkdownEditor from "./Pages/MarkdownEditor"
export default function App() {

  return (
    <div className="bg-slate-800 h-[100vh]">
      <div className=" flex flex-col gap-10 items-center justify-center bg-slate-800">
            <NavBar />
            
            <div className="w-[80vw]  lg:w-[60vw] flex flex-col items-center gap-10 text-white ">
              <Routes> 
                <Route path="/" element={<Home/> } /> 
                <Route path="/editor" element={<MarkdownEditor/> } /> 
                <Route path="/blog" element={<BlogPage/> } /> 
                <Route path="/no" element={<NotFound/> } /> 
              </Routes> 



            </div>

            <div className="w-[80vw]  mt-10 lg:w-[60vw] flex flex-col gap-10 text-white ">
              <Footer/>

            </div>
      </div>
    </div>
    
  )
}