import React from 'react'
import { Slide } from 'react-awesome-reveal'


function About() {
    return (
        <div className=' p-5 md:p-10 text-slate-700 dark:text-slate-300 justify-center  items-center  bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black    bg-gray-300  w-full'>
            <h2 className="py-5 text-center text-5xl font-bold"> About Me</h2>
            <div className="group space-y-6 md:space-y-8 md:p-10">
                <Slide as="div" direction='left'>
                    <div className="md:group-hover:-translate-x-10 transform ease-liner delay-50 duration-500  p-5 md:p-10 rounded-xl max-w-screen-lg mx-auto backdrop-blur bg-slate-400/10 dark:bg-slate-800/10">
                        <div>
                            Hello! My name is Swasthik Shetty and I enjoy creating things that live on the internet.
                            My interest in development started back in 2018 when I used to play lot of video games and decided to build one, then along the way I stared exploring cybersecurity, machine learning and web development.
                            and found my interest in web development and in 2020 I stared learning django and frontend fundamentals I got fascinated by web application and stared learning and exploring new web technologies...
                        </div >
                    </div>
                </Slide>
                <Slide as="div" direction='right'>
                    <div className="md:group-hover:translate-x-10 transform ease-liner delay-50 duration-500  p-5 md:p-10 rounded-xl max-w-screen-lg mx-auto backdrop-blur bg-slate-400/10 dark:bg-slate-800/10">
                        <div>
                            Fast-forward to today, I build full-stack websites and over the time I have gained proficiency in React JS, Next JS and Django ,My main focus these days is building web applications, contributing to open-source community and learning about blockchain and metaverse
                        </div>
                    </div>
                </Slide >
            </div>
        </div >
    )
}

export default About