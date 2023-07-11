
import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full text-white">
            <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto py-4">
                <a href="#" className="flex items-center">
                    <Link to="/">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Satoshi Society</span>
                    </Link>
                </a>

                <div className='flex transition'>
                    <a href="#" className="flex items-center">
                        <Link to="/editor">
                            <span className="self-center rounded-lg border bg-slate-700 hover:text-amber-500 hover:border-amber-400 transition px-4 py-2 text-md my-4 whitespace-nowrap dark:text-white">
                                Create +
                            </span>
                        </Link>
                    </a>

                    
                   
                </div>

            </div>
        </nav>  
    )

}
