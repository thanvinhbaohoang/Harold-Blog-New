export default function ContactSection(){
    return(
        <section className="w-full flex flex-col ">
            <div className="flex justify-between items-center">
            <div>
                <h1 className="font-bold text-4xl ">Contact Me</h1>
                    <p className="font-md text-amber-300">Get in Touch </p>

                </div>
                <div className="flex flex-col flex-end text-right opacity-50 my-6">
                    <p> haroldthan@gmail.com</p>
                    <p className="flex-end"> Boston, MA</p>
                </div>
            </div>

                <button className="grey-button w-1/3  font-bold text-amber-400 px-10 border border-amber-300 border-opacity-20 outline-amber-300">
                    Send me an Email !
                </button>
            </section>
    )
}