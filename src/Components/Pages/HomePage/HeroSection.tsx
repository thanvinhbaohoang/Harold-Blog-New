
import { FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsLightningFill} from 'react-icons/bs'

export default function HeroSection() {
    return(
        <section className="flex flex-col lg:flex-row w-full gap-20 mt-24 z-10 items-center justify-between ">
                <div className='flex flex-col 
                h-full gap-10 items-start justify-between
                lg:w-1/2    
                '>

                    <div className="flex-col gap-2 justify-center  flex">
                        <h1 className="font-bold text-5xl"> Hey, I'm <span className="hover-underline">Harold Than!</span></h1>
                        <a className="text-2xl opacity-60 hover:underline underline-offset-4 hover:text-indigo-400 transition">Full-stack Developer  </a>
                        <p className="text-xl opacity-80"> I am a musician with <em className="text-amber-400">burning passion</em> 🔥 
                        for <span className="text-amber-300 hover-underline">open-source projects</span> and agorism.
                        Currently working on Bitcoin and Ethereum projects to further cryptocurrency adoption <span className="">😎</span></p>
                    </div>

                    <a target='_blank' 
                    href='https://docs.google.com/document/u/1/d/e/2PACX-1vT7jG9ED_WYzJbgSqhLpmJfY8-fSg-YP_qMpTGUy4krmKYT83z9a22hPUiM7kSi4g/pub'>
                        <button className='grey-button text-amber-300 border-2
                        w-full
                        lg:w-auto
                        border-amber-400 bg-zinc-800 outline-yellow-300'>
                            Resume
                        </button>
                    </a>
                   

                </div>

                        
                <div className="w-full lg:order-2 lg:display-none max-w-sm hover:scale-[102%] transition hover:outline-double outline-amber-300   
                  rounded-xl shadow bg-amber-500 bg-opacity-20 hover:bg-amber-500 hover:bg-opacity-50">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="active:scale-110 inline-block border border-white text-white hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <div className="transition">
                                <BsLightningFill/>
                            </div>
                        </button>
                     
                    </div>

                    <div className="flex flex-col group items-center pb-10">
                        <img className=" w-1/2 h-1/2 mb-3 rounded-full shadow-lg" 
                        src="./harold_linkedin_pic.jpeg"/>
                        <h5 className="mb-1 text-xl  text-white font-bold transition-all">Harold Than
                        </h5>
                        <span className="text-sm group-hover:text-amber-200 transition text-white">
                            Full-Stack Developer
                        </span>
                        <div className="flex items-center mt-4 space-x-3 text-sm  md:mt-6">
                            {/* <a href="#" className="border rounded-full p-2 
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
                                <div className="group-hover:animate-spin transition ">
                                    <BsPersonFill/>
                                </div>                              
                            </a> */}

                            <a href="https://www.linkedin.com/in/harold-than/" target="_blank" className="border rounded-full p-2 
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
                                <div className="group-hover:animate-spin transition ">
                                    <FaLinkedinIn/>
                                </div>                            
                                </a> 
                            
                              <a href="https://github.com/thanvinhbaohoang/"  target="_blank" className="border rounded-full p-2 group
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
                                <div className="group-hover:animate-spin transition ">
                                    <FaGithub/>
                                </div>
                                </a>


                              <a href="https://www.instagram.com/haroldwithoutkumar/"  target="_blank" className="border rounded-full p-2 
                            opacity-50 hover:opacity-100 hover:scale-110 transition">
 <div className="group-hover:animate-spin transition ">
                                    <FaInstagram/>
                                </div>                            
                            </a>
                        </div>
                    </div>
                </div>


                
           </section>
    )
}