
import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

export default function NavBar() {
    return (
        <nav className="mt-6 w-1/2 text-white">
            <div className="max-w-screen-xl flex flex-col flex-wrap  justify-between mx-auto py-4">
                <a href="#" className="flex items-center hover:translate-y-1 transition">
                    <Link to="/">
                        <span className="self-center opacity-80 text-3xl font-bold whitespace-nowrap dark:text-amber-400">Harold Than 🤓</span>
                    </Link>
                </a>

                <ul className='flex text-xl  font-md gap-4 mt-4'>
                    <Link to="/about">
                        <li className='opacity-60 hover:opacity-100 transition cursor-pointer hover-underline'> About </li> 
                    </Link>

                    <Link to="/projects">
                    <li className='opacity-60 hover:opacity-100 transition cursor-pointer hover-underline'> Projects </li>
                    </Link>

                    <Link to="/blogs">
                    <li className='opacity-60 hover:opacity-100 transition cursor-pointer hover-underline'> Blogs </li>
                    </Link>

                    <li className='opacity-60 hover:opacity-100 transition cursor-pointer hover-underline'> Contact </li>
                    
                    <li className='opacity-60 hover:opacity-100 transition cursor-pointer hover-underline flex items-center gap-2'> Github <FiExternalLink size={16}/></li>

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
