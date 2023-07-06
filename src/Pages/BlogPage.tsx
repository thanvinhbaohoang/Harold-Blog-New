import React from "react";
// import ReactMarkdown from 'react-markdown'
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

export default function BlogPage() {
    return (
    <div className="">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <div className="w-16 h-16 mr-4 rounded-full bg-white"></div>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
          </header>
        
             <article className="prose-invert prose-img:rounded-xl prose-a:text-teal-300 prose-a:font-bold mx-auto prose-lg max-w-none prose-p:text-gray-300 prose-headings:font-bold prose-slate ">
                
                <ReactMarkdown children={markdownContent}/>


            </article>
        </div>
    )
}
