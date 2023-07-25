
import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';



export default function NavBar() {
    return (
        <nav className="mt-6 w-full text-white">
            <div className="max-w-screen-xl flex flex-col flex-wrap  justify-between mx-auto py-4">
                <a href="#" className="flex items-center hover:translate-y-1 transition">
                    <Link to="/">
                        <span className="self-center opacity-80 text-3xl font-bold whitespace-nowrap dark:text-amber-400">Harold Than 🤓</span>
                    </Link>
                </a>

                <ul className='flex text-xl  font-md gap-4 mt-4'>
                    <Link to="/">
                        <a class="group text-gray-400 hover:text-white transition-all " href="#">
                            <span class="bg-left-bottom bg-gradient-to-r from-teal-300 to-teal-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                About
                            </span>
                        </a>
                    </Link>

                    <Link to="/projects">
                    <a class="group text-gray-400 hover:text-white transition-all " href="#">
                            <span class="bg-left-bottom bg-gradient-to-r from-pink-400 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Projects
                            </span>
                        </a>                    
                    </Link>

                    <Link to="/blogs">
                    <a class="group text-gray-400 hover:text-white transition-all " href="#">
                            <span class="bg-left-bottom bg-gradient-to-r from-amber-400 to-amber-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Blog
                            </span>
                    </a>                    
                    </Link>

                    {/* <a class="group text-gray-400 hover:text-white transition-all " href="#">
                            <span class="bg-left-bottom bg-gradient-to-r from-emerald-300 to-emerald-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Contact
                            </span>
                        </a>   */}
                    
                    <a class="group text-gray-400 hover:text-white transition-all" href="https://github.com/thanvinhbaohoang"  rel="noopener noreferrer" target="_blank">
                            <span class="bg-left-bottom flex items-center gap-2 bg-gradient-to-r from-purple-400 to-teal-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Github <FiExternalLink size={16}/>
                            </span>
                        </a>  
                </ul>

                {/* <div className='flex transition active:scale-95'>
                    <a href="#" className="flex items-center">
                        <Link to="/editor">
                            <span className="self-center rounded-lg border bg-slate-700 
                            hover:text-indigo-500 active:bg-purple-700 hover:border-indigo-400 transition 
                            
                            px-4 py-2 text-md my-4 whitespace-nowrap dark:text-white">
                                Create +
                            </span>
                        </Link>
                    </a>
                </div> */}

               

            </div>
        </nav>  
    )

}
