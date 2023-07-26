  export default function NotFound() { 
    return  (
        <div className="flex flex-col items-center h-[40vw]">
            <h1 className="font-bold text-3xl"> Page Not Found</h1>

            <p> Sorry, the page you are looking for doesn't exist.</p>
            <button className="flex gap-2 items-center border py-2 px-6 border-gray-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
               <span>
                Go Back
               </span>
            </button>
        </div>

    )
} 