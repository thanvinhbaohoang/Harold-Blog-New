export default function ContactSection(){
    return(
        <section className="w-full flex flex-col items-center ">
            <div className="flex justify-between items-center">
            <div className="items-center flex flex-col">
                <h1 className="font-bold text-4xl ">Contact Me</h1>
                <p className="font-md text-amber-300">Get in Touch </p>
                <p className="text-sm text-gray-400">I am currently open for work </p>

                <div className="flex flex-col items-center text-right opacity-50 my-6">
                    <p> haroldthan@gmail.com</p>
                    <p className="flex-end"> Boston, MA</p>
                </div>
                </div>
            </div>

            <a href = "mailto: haroldthan@gmail.com">
                <button className="grey-button font-bold text-amber-400 px-10 border border-amber-300 border-opacity-20 outline-amber-300">
                    Send Email 
                </button>
            </a>
            
            </section>
    )
}