import NavBar from "./navbar"
import Footer from "./Components/Footer"
import {Routes , Route } from "react-router-dom" 
import NotFound from "./Components/Pages/NotFound"
import Home from "./Components/Pages/HomePage/Home"
import BlogPage  from "./Components/Pages/BlogsPage/BlogPage"
import MarkdownEditor from "./Components/Pages/BlogsPage/MarkdownEditor"
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage"
import BlogsPage from "./Components/Pages/BlogsPage/BlogsPage"
import AboutPage from "./Components/Pages/AboutPage/AboutPage"


export default function App() {

  return (
    <div className="h-[100vh] bg-gray-800 ">
       
        {/* Background Blobs */}
        <div className="absolute -z-1 w-1/2 top-36 left-1/4 flex items-center blur-3xl justify-around opacity-25 ">
            <div className="top-20 left-96 w-72 h-72 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter animate-blob"></div>
            <div className="w-72 h-[30em] animate-pulse bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
            <div className="w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter animate-blob animation-delay-4000"></div>
        </div>

      <div className=" flex flex-col gap-10 items-center
      body-font font-poppins text-lg  w-full
      justify-center  bg-gray-800 ">

          <div className="lg:w-[60vw] w-[90%] ">
              <NavBar />
             

              
              

                <div className=" flex flex-col items-center  text-white ">
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

              <div className=" mt-24">
                <Footer/>
              </div>
          </div>

      </div>
    </div>
    
  )
}