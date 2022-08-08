import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

function About() {
    return (
        <div className='relative overflow-x-hidden
             p-5 md:p-10 justify-center items-center w-full
            bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black bg-gray-300'>
            <div className="py-8 md:py-4 text-center">
                <a className="
                animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
                tracking-wide hover:tracking-widest duration-300 transform ease-in-out
                md:after:h-1  text-center text-5xl font-bold link-glow">
                    About Me
                </a>

            </div>
            <div className="text-start  md:text-lg  group space-y-6 md:space-y-8 md:p-10">
                <Fade  >
                    <div className="
                    border-2 border-sky-600/50 hover:bg-gradient-to-l from-cyan-200/40 to-pink-100/40 dark:from-slate-900/10 dark:to-blue-900/10   ease-in-out  dark:border-slate-500/50
                    md:group-hover:-translate-x-10 transform-color ease-liner delay-100 duration-500  p-5 md:p-10 rounded-xl max-w-screen-lg mx-auto backdrop-blur bg-slate-400/10 dark:bg-slate-800/10">
                        <div>
                            Hello! My name is Swasthik Shetty and I enjoy creating things that live on the internet.
                            My interest in development started back in 2018 when I used to play lot of video games and decided to build one, then along the way I stared exploring cybersecurity, machine learning and web development.
                            and found my interest in web development and in 2020 I stared learning django and frontend fundamentals I got fascinated by web application and stared learning and exploring new web technologies...
                        </div >
                    </div>
                </Fade>
                <Fade  >
                    <div className="  delay-100
                    border-2 border-sky-600/50 hover:bg-gradient-to-l from-cyan-200/40 to-pink-100/40 dark:from-slate-900/10 dark:to-blue-900/10   ease-in-out  dark:border-slate-500/50
                    md:group-hover:translate-x-10 transform-color ease-liner  duration-500  p-5 md:p-10 rounded-xl max-w-screen-lg mx-auto backdrop-blur bg-slate-400/10 dark:bg-slate-800/10">
                        <div>
                            Fast-forward to today, I build full-stack websites and over the time I have gained proficiency in React JS, Next JS and Django ,My main focus these days is building web applications, contributing to open-source community and learning about blockchain and metaverse
                        </div>
                    </div>
                </Fade >
            </div>

            <div className="z-10 flex flex-wrap  justify-start md:justify-evenly mt-10  ">

                <Slide direction="left">

                    <div>
                        <div className="md:py-4 ">
                            <a className="
            md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-3xl font-bold link-glow">
                                Experience
                            </a>
                        </div>
                        <ol className="  border-l relative mt-10 border-slate-300 dark:border-slate-600">
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">Nov 2021 - Present</time>
                                <h3 className="text-lg font-semibold ">Farmoid Robotech Pvt. Ltd.</h3>
                                <p className="text-base font-norm opacity-75">Full Stack web Developer</p>
                            </li>
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">Oct 2021 - Present</time>
                                <h3 className="text-lg font-semibold ">Inspirante Technologies Pvt. Ltd.</h3>
                                <p className="text-base font-norm opacity-75">Web Development Intern</p>
                            </li>
                        </ol>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div>
                        <div className="md:py-4 ">
                            <a className="
              md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-3xl font-bold link-glow">
                                Education
                            </a>
                            <span className="h-1 bg-black w-full min-w-max"></span>
                        </div>
                        <ol className="  border-l relative mt-10 border-slate-300 dark:border-slate-600">
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2020 - Present</time>
                                <h3 className="text-lg font-semibold ">B.E (computer Science and Engineering)
                                </h3>
                                <p className="text-base font-norm opacity-75">NMAM Institute of Technology , Nitte</p>
                                <p className="text-sm font-norm opacity-75">recent CGPA : 8.98/10</p>
                            </li>
                            <li className="-mt-6 mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-slate-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2018 - 2020</time>
                                <h3 className="text-lg font-semibold ">Pre-University Education</h3>
                                <p className="text-base font-norm opacity-75">DR N.S.A.M PU C0llege, nitte</p>
                                <p className="text-sm font-norm opacity-75">Aggregate percentage: 82%</p>
                            </li>
                        </ol>
                    </div>
                </Slide>
            </div>

        </div >
    )
}

export default About