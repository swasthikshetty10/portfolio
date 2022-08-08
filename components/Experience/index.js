import React from 'react'

function Experience() {
    return (

        <section className='p-5 md:p-5 bg-gradient-to-br h-screen w-full'>
            <div className="md:py-4 text-center">
                <a className="
            animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-5xl font-bold link-glow">
                    Experience
                </a>
                <p className='mt-3 md:text-lg'>
                    Here are somethings I&#39;ve built recently
                </p>
            </div>
            <ol className="  border-l relative border-slate-300 dark:border-slate-600">
                <li className="-mt-6 mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-slate-500">Nov 2021 - Present</time>
                    <h3 className="text-lg font-semibold ">Farmoid Robotech Pvt. Ltd.</h3>
                    <p className="text-base font-norm opacity-75">Full Stack web Developer</p>
                </li>
                <li className="-mt-6 mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-slate-500">Oct 2021 - Present</time>
                    <h3 className="text-lg font-semibold ">Inspirante Technologies Pvt. Ltd.</h3>
                    <p className="text-base font-norm opacity-75">Web Development Intern</p>
                </li>
            </ol>
        </section>
    )
}

export default Experience