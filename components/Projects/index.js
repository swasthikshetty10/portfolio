import React from 'react'
import { Fade } from 'react-awesome-reveal'


function Projects() {
    return (
        <div className='text-center p-5 md:p-10    justify-center  items-center  bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black    bg-gray-300  w-full'>
            <div className="py-8 md:py-4">
                <a className="
            animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
             md:after:h-1  text-center text-5xl font-bold link-glow">
                    Projects
                </a>
            </div>
            <div className="text-start  md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10">
                <div className='flex  flex-col  gap-5 md:gap-0 md:max-w-sm md:px-10  lg:max-w-md xl:max-w-xl group  mx-auto md:flex-row items-center justify-center
                    border-2 border-sky-600/50 bg-gradient-to-tl text-base from-cyan-200/40 to-pink-100/50 dark:from-slate-900/50 dark:to-blue-900/50   ease-in-out  dark:border-slate-500/50
                     transform-color ease-liner   p-3 md:p-5 rounded-xl  backdrop-blur  
                    md:border-none md:bg-none
                '>
                    <div className=' flex-auto  md:translate-x-10 w-auto  md:p-0'>
                        <img src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="md:max-w-lg md:grayscale transition-colors transform duration-400 ease-in-out group-hover:grayscale-0 "
                        />
                    </div>
                    <div className="min-w-fit order-first md:order-2 space-y-5 md:text-end md:-translate-x-10">
                        <h2 className="font-semibold text-2xl uppercase tracking-wider md:order-2">Project Name</h2>
                        <div className="md:-ml-28 lg:-ml-26 xl:-ml-10
                    md:border-2 border-sky-600/50 md:bg-gradient-to-tl text-base from-cyan-200/40 to-pink-100/50 dark:from-slate-900/70 dark:to-blue-900/40   ease-in-out  dark:border-slate-500/50
                     transform ease-liner   p-2 md:p-5 rounded-xl  mx-auto backdrop-blur-md ">

                            Fast-forward to today, I build full-stack websites and over the time I have gained proficiency in React JS, Next JS and Django ,My main focus these days is building web applications, contributing to open-source community and learning about blockchain and metaverse

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects