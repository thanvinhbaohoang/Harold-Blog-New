import NavBar from "./navbar"
import PostCards from "./Components/PostCards"
import SquareCards from "./Components/SquareCards"
import Categories from "./Components/Categories"
import Footer from "./Components/Footer"
import { collection, getDocs } from "firebase/firestore"; 
import { useState } from "react"

export default function App() {
  const [blogs, setBlogs] = useState([]);
  // const blogsRef = collection(db, "blogs");

  return (
    <div className="bg-slate-800 h-[100vh]">
      <div className=" flex flex-col gap-10 items-center justify-center bg-slate-800">
            <NavBar />
            <div className="w-[80vw]  lg:w-[40vw] flex flex-col gap-10 text-white ">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-3xl text-white">
                  Most Recent
                </h1>
                <PostCards/>
              </div>
            

              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-3xl text-white">
                  All Posts
                </h1>
                <Categories/>
                <SquareCards/>
              </div>

              <Footer/>
            </div>
      </div>
    </div>
    
  )
}