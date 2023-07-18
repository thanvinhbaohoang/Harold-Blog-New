
import { FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsPersonFill, BsLightningFill} from 'react-icons/bs'

export default function HeroSection() {
    return(
        <section className="flex w-full  items-center justify-between  mb-10">
                <div className="flex-col gap-2 text-lg my-24 justify-center  h-full  flex">
                    <h1 className="font-bold text-5xl"> Hey, I am <span className="hover-underline">Harold Than!</span></h1>
                    <a className="text-3xl opacity-60 hover:underline underline-offset-4 hover:text-indigo-400 transition">Full-stack Developer  </a>
                    <p className="text-2xl opacity-80"> I am a musician with <em className="text-amber-400">burning passion</em> 🔥 for <span className="text-amber-300 hover-underline">open-source projects</span> and agorism.
                    Currently working on Bitcoin and Ethereum projects to further cryptocurrency adoption <span className="">😎</span></p>
                </div>

                        
                <div class="w-full max-w-sm hover:scale-[102%] transition hover:outline-double outline-amber-300   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="active:scale-110 inline-block border border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span class="sr-only">Open dropdown</span>
                            <div className="transition">
                                <BsLightningFill/>
                            </div>
                        </button>
                        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col group items-center pb-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/298841264_802905871121966_6082265023474547667_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UVO_5nODTeUAX-Cyy6v&_nc_ht=scontent-bos5-1.xx&oh=00_AfA-P850rXQ73o-qf-c1dcxfUw2ehRoKWmCJtZtpItDzig&oe=64BAA7B9" alt="Harold image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 font-bold transition-all
                         dark:text-white">Harold Than
                        </h5>
                        <span class="text-sm group-hover:text-amber-400 transition text-gray-500 dark:text-gray-400">Full-Stack Developer</span>
                        <div class="flex items-center mt-4 space-x-3 text-sm  md:mt-6">
                            <a href="#" class="border rounded-full p-2 
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
                                <div className="group-hover:animate-spin transition ">
                                    <BsPersonFill/>
                                </div>                              
                            </a>

                            <a href="#" class="border rounded-full p-2 
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
                                <div className="group-hover:animate-spin transition ">
                                    <FaLinkedinIn/>
                                </div>                            
                                </a> 
                            
                              <a href="#" class="border rounded-full p-2 group
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
                                <div className="group-hover:animate-spin transition ">
                                    <FaGithub/>
                                </div>
                                </a>


                              <a href="#" class="border rounded-full p-2 
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
 <div className="group-hover:animate-spin transition ">
                                    <FaInstagram/>
                                </div>                            </a>
                        </div>
                    </div>
                </div>
           </section>
    )
}