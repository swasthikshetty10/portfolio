import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'
import useBreakpoints from '../../hooks/useBreakpoint'

function Projects() {
    return (
        <div className='text-center space-y-8 p-5 md:p-10 justify-center items-center bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black bg-gray-300 w-full'>
            <div className="md:py-4">
                <a className="
            animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1  text-center text-5xl font-bold link-glow">
                    Projects
                </a>

            </div>
            <p>
                Here are some of my recent projects
            </p>
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src="/projects/portfolio.png"
                description={`I had really fun time creating this website,used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
            />
            <ProjectsCard
                reverse={true}
                name={<>Incridea<span className="text-base ml-1 capitalize"> website 2022 </span></>}
                tech={["React JS", "Tailwind Css", "Firebase", "Node JS", "Razorpay"]}
                src="/projects/incridea.png"
                description={`
                Website for the annual techno-cultural fest of my college, called Incridea. worked in team of 5 ,
                had lot of fun creating website stayed in college had sleepless nights one of the best memories in college so far,
                The website was visited by over 9000+ people throughout the duration of the fest, we used firebase to store participants data and
                razorpay for payments  
                `}
            />
            <ProjectsCard
                name={<>Incridea<span className="text-base ml-1 capitalize"> control panel</span></>}
                tech={["React JS", "Tailwind Css", "Firebase"]}
                src="/projects/incrideacp.png"
                description={`We decided to go with paperless jury for annual techno-cultural fest of my college , called incridea
                `}
            />
        </div >
    )
}

export default Projects

function ProjectsCard(props) {
    const { isXs, isSm } = useBreakpoints();
    return (<div className="text-start  md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10">
        <div className='flex  flex-col  gap-5 md:gap-0 md:max-w-sm md:px-10  lg:max-w-md xl:max-w-xl group  mx-auto md:flex-row items-center justify-center
                    border-2 border-sky-500/50 bg-gradient-to-tl text-base from-cyan-100/40 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50   ease-in-out  dark:border-slate-500/50
                     transform-color ease-liner   p-3 md:p-5 rounded-xl  backdrop-blur  
                    md:border-none md:bg-none
                '>
            <div className={` flex-auto  ${props.reverse ? "md:-translate-x-10" : "md:translate-x-10"}  w-auto  md:p-0`}>
                <img src={props.src}
                    className="md:max-w-lg md:grayscale transition-colors transform duration-100 ease-in-out group-hover:grayscale-0 "
                />
            </div>
            <div className={`min-w-fit order-first   ${props.reverse ? "md:order-first md:translate-x-10" : " md:text-end md:order-2 md:-translate-x-10"}`}>
                <Parallax speed={isXs || isSm ? 0 : 13} className="space-y-2">
                    <h2 className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase  tracking-wider md:order-2">{props.name}</h2>
                    <div className='space-x-3  md:tracking-wide  text-sm '>
                        {props.tech.map((ele, i) => <a key={i}>{ele}</a>)}
                    </div>
                    <div className={`${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10"}
                md:border-2 border-sky-700 /20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70   ease-in-out  dark:border-slate-500/50
                    transform ease-liner    md:p-5  rounded-xl  mx-auto md:backdrop-blur-md `}>
                        {props.description}
                    </div>
                    <div className="inline-flex gap-3 pt-3 text-2xl ">
                        <a href={props.github}>
                            <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300  " />
                        </a>
                        <a href={props.link}>
                            <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300 " />
                        </a>

                    </div>
                </Parallax>
            </div >
        </div >
    </div >)
}