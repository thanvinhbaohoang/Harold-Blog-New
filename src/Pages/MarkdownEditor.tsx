
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
        
       <div className="w-[60vw] h-[70vh] mb-10">
        <h1 className="font-bold text-3xl mb-6">
            New Blog Post
        </h1>


            <div className="flex gap-2 h-full">
                    <form className="flex flex-col w-[70%] gap-4">
                            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tags" required/>

                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Author " required/>
                                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required/>
                            </div>

                                <div className="rounded-lg h-full border  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300">
                                    <textarea id="text" class="p-2.5 w-full h-full rounded-lg text-sm dark:bg-gray-700 dark:text-gray-200 text-gray-900  "placeholder="Blog Content..."></textarea>
                                </div>
                    </form>

                    <div class="h-full w-full p-4 overflow-y-scroll bg-slate-900 rounded-lg">
                        <article className="prose-invert prose-img:rounded-xl 
                                prose-a:text-teal-400 prose-a:font-bold 
                                mx-auto prose-lg max-w-none prose-p:text-gray-300 
                                prose-headings:font-bold prose-slate ">
                            <ReactMarkdown children={markdownContent}/>

                        </article>
                    </div>

            </div>

            <button class="bg-blue-500 w-full hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
                Publish Blog
                </button>
       </div>

    )
}