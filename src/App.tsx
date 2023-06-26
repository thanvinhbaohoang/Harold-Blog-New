import NavBar from "./navbar"
import PostCards from "./Components/PostCards"
import SquareCards from "./Components/SquareCards"

export default function App() {
  return (
    <div className="bg-slate-800 h-[100vh]">
      <div className=" flex flex-col gap-10 items-center justify-center bg-slate-800">
            <NavBar />
            <div className="w-[50vw] flex flex-col gap-10 ">
            <h1 className="font-bold text-3xl text-white">
              Most Recent
            </h1>
            <PostCards/>
            <h1 className="font-bold text-3xl text-white">
              Other Posts
            </h1>
            <SquareCards/>
            </div>
      </div>
    </div>
    
  )
}