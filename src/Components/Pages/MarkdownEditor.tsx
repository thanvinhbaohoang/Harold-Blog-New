
import ReactMarkdown from 'react-markdown';


const markdownContent = 
`
# Hello World

## Header 2


### Header 3
Fuck this shit...

It finally work holy shit


My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
![alt text](https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80 "Title")




`
export default function MarkdownEditor(){

    return(
        
       <div className="w-[50vw] p-4  flex flex-col gap-4 mb-10">
            <div className='flex gap-4'>
                
            <button class="bg-purple-500 hover:bg-purple-700 bg-opacity-30 transition text-white font-bold py-2 px-4 rounded">
                Edit
            </button>

            <button class="bg-purple-500 hover:bg-purple-700 bg-opacity-30 transition text-white font-bold py-2 px-4 rounded">
                Preview
            </button>

            </div>


            <div className="flex h-full border-2 border-slate-600 rounded-xl p-4">
                    <form className="flex flex-col h-full w-full gap-2">

                            {/* Image Upload */}
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div> 

                            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-3xl font-bold rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="New Blog Title Here ..." required/>
                            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Add up to 3 tags ..." required/>


                            {/* <div className="rounded-lg h-[60vh] border focus:ring-purple-500 focus:border-purple-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 border-gray-300"> */}
                                <textarea id="text" class="rounded-lg h-[60vh] border focus:ring-purple-500 focus:border-purple-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 border-gray-300 p-2.5 w-full rounded-lg text-md dark:bg-gray-700 dark:text-gray-200 text-gray-700  "placeholder="Write Your Blog Content Here ..."></textarea>
                            {/* </div> */}
                    </form>
            </div>

            <button class="bg-purple-500 hover:bg-purple-700 bg-opacity-30 transition text-white font-bold py-2 px-4 rounded-lg">
                        Publish
            </button>

           
       </div>

    )
}