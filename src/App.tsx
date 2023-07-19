import NavBar from "./navbar"
import Footer from "./Components/Footer"
import {BrowserRouter, Routes , Route } from "react-router-dom" 
import NotFound from "./Components/Pages/NotFound"
import Home from "./Components/Pages/HomePage/Home"
import BlogPage, { BlockPage } from "./Components/Pages/BlogsPage/BlogPage"
import MarkdownEditor from "./Components/Pages/BlogsPage/MarkdownEditor"
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage"
import BlogsPage from "./Components/Pages/BlogsPage/BlogsPage"
import AboutPage from "./Components/Pages/AboutPage/AboutPage"

export default function App() {

  return (
    <div className="h-[100vh] bg-gray-800 ">
      <div className=" flex flex-col gap-10 items-center
      body-font font-poppins text-lg
      justify-center bg-gray-800">
          <div className="w-[60vw] ">
              <NavBar />
            
              <div className="flex flex-col items-center  text-white ">
                <Routes> 
                  <Route path="/" element={<Home/> } /> 
                  <Route path="/about" element={<AboutPage/> } /> 
                  <Route path="/projects" element={<ProjectsPage/> } /> 
                  <Route path="/blogs" element={<BlogsPage/> } /> 


                  <Route path="/editor" element={<MarkdownEditor/> } /> 
                  <Route path="/blog" element={<BlogPage/> } /> 
                  <Route path="/no" element={<NotFound/> } /> 
                </Routes> 
              </div>

              <div className="w-[80vw]  mt-10 lg:w-[60vw] flex flex-col  text-white ">
                <Footer/>
              </div>
          </div>

      </div>
    </div>
    
  )
}