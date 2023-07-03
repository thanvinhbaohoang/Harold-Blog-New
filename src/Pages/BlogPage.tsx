import React from "react";
import ReactMarkdown from 'react-markdown'

export default function BlogPage() {
    return (
    <article class="">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <div className="w-16 h-16 mr-4 rounded-full bg-white"></div>
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
          </header>

          <div class="prose-invert mx-auto max-w-none prose-p:text-gray-400 prose-headings:font-bold prose-xl w-full prose-teal ">
          <article>

            <h1> Example Bullshit Title For My Blog</h1>
<h2>Google Chrome</h2>
<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
            </article>

            <article>
            <h2>Mozilla Firefox</h2>
            <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
            </article>

            <article>
            <h2>Microsoft Edge</h2>
            <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
            </article>
        </div>

        </article>
    )
}
