import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'
import useBreakpoints from '../../hooks/useBreakpoint'
import Image from 'next/image'

function Projects() {
    return (
        <section id="work" className='text-center space-y-8 p-5 md:p-10 justify-center items-center bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black bg-gray-300 w-full'>
            <div className="md:py-4">
                <a className="
            animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-5xl font-bold link-glow">
                    My Works
                </a>
                <p className='mt-3 md:text-lg'>
                    Here are somethings I&#39;ve built recently
                </p>
            </div>


            <ProjectsCard
                name={<>Incridea<span className="text-base ml-1 capitalize">website 2023 </span></>}
                tech={["Next.js", "Tailwind Css", "GraphQL", "RazorPay", "PrismaORM", "Typescript", "Rive"]}
                src="/projects/incridea23.png"
                description={`Led the development team of Incridea 2023(annual fest @NMAMIT) and successfully developed a paperless system for fest and event registration, along with a paperless jury process. We implemented a secure Payment Gateway using Razorpay and JWT authentication from scratch. Additionally, we built 7+ real-time event management dashboards using Next.js, Typescript, TailwindCss, FramerMotion, and Rive for animated content. Our GraphQL API, created with GraphQL-Yoga, Pothos, Prisma ORM, and MySQL, ensured complete type-safety. Our efforts resulted in a streamlined and successful Incridea 2023 experience.
                `}
                link="https://incridea.in"
                github="https://github.com/incridea-23"
            />
            <ProjectsCard
                name={<span className='capitalize'>JabWeMeet,<span className="text-base ml-1 capitalize">Multilingual video conferencing app </span></span>}
                tech={["Next.js", "TailwindCss", "tRPC", "LiveKit", "Pusher", "Prisma(ORM)"]}
                src="/projects/jabwemeet.png"
                description={`Developed during the @Hackoverflow1.0 Hackathon. It enables real-time multilingual communication through audio translation and captions, supporting up to 100 concurrent users. The app automatically generates meeting summaries and transcripts for easy review. The technology stack includes Next.js, tRPC, Typescript, Livekit, Pusher, TailwindCSS, PrismaORM, MySQL, Google Translation & TTS API, and OneAPI for meeting summaries.`}
                link="https://jabwemeet.vercel.app"
                github="https://github.com/swasthikshetty10/hackoverflow"
                reverse={true}
            />
            <ProjectsCard
                name={<><span className="text-base ml-1 capitalize"> </span></>}
                tech={["Next JS", "tRPC", "TailwindCss", "Typescript", "Prisma(ORM)"]}
                src="/projects/nitteqspace.png"
                description={` website that enables students to connect, share knowledge, post queries, and stay updated on campus events. The user-friendly interface allows for easy consumption of educational content. The website is built using Next.js, tRPC, TailwindCSS, Typescript, PrismaORM, and PlanetScale MySQL, providing students with a valuable resource for collaborative learning and staying connected with peers.`}
                link="/"
                github=""
            />
            <ProjectsCard
                reverse={true}
                name={<>Incridea<span className="text-base ml-1 capitalize"> website 2022 </span></>}
                tech={["React JS", "Tailwind Css", "Firebase", "Node JS", "Razorpay"]}
                src="/projects/incridea.png"
                description={`The website for our college's annual techno-cultural fest, Incridea, was a team effort involving five individuals. We had an enjoyable time creating the website, staying on campus and experiencing sleepless nights, making it one of our most cherished college memories. Throughout the duration of the fest, the website received over 9000+ visitors. We utilized Firebase to securely store participants' data and Razorpay for seamless payment transactions. Additionally, we decided to implement a paperless jury system for Incridea, featuring event organizers' dashboard for participant scanning and registration, judges' dashboard for scoring participants and finalizing results, and a real-time event monitoring dashboard for the jury.
                `}
                github="https://github.com/BharathMKulkarni/Incridea22"
                link="https://incridea.in"
            />

            <ProjectsCard

                name={<>Farmoid Robotech<span className="text-base ml-1 capitalize"> </span></>}
                tech={["Next JS", "Tailwind Css", "Prisma(ORM)", "Postgresql"]}
                src="/projects/farmoid.png"
                description={`Designed and built full website for Farmoid Robotech Pvt. Ltd.(an agritech startup), ensuring a seamless user experience.  
                `}
                link="https://farmoidrobotech.com"
            />

            < ProjectsCard
                reverse={true}
                name={<> TechlifeJournal <span span className="text-base ml-1 capitalize" > blog website</span ></>}
                tech={["Next JS", "Tailwind Css", "Django(DRF)", "Postgresql"]}
                src="/projects/techlifejournal.png"
                description={`Website for posting blogs, user can register and post blogs using markdown language, built using Django rest framework and NextJS 
                `}
                github="https://github.com/techlifejournal/techlifejournal"
                link="https://techlifejournal.netlify.app/"
            />
            <Link href="https://github.com/swasthikshetty10">
                <a target="_blank" className='text-xl '>To see more, head over to my <span className="inline-flex gap-2 items-center font-semibold italic cursor-pointer ease-in-out duration-300 hover:text-sky-800 hover:dark:text-sky-300">
                    Github profile!
                    <FaGithub />
                </span></a>
            </Link>
        </ section>
    )
}

export default Projects

function ProjectsCard(props) {
    const { isXs, isSm, isMd } = useBreakpoints();
    return (<div className="text-start  md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10">
        <div className='flex  flex-col  gap-5 md:gap-0 md:max-w-sm md:px-10  lg:max-w-md xl:max-w-xl group  mx-auto md:flex-row items-center justify-center
                    border-2 border-sky-500/50 bg-gradient-to-tl text-base from-cyan-100/40 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50   ease-in-out  dark:border-slate-500/50
                     transform-color ease-liner   p-3 md:p-5 rounded-xl  backdrop-blur  
                    md:border-none md:bg-none
                '>
            <div className={` flex-auto  ${props.reverse ? "md:-translate-x-10" : "md:translate-x-10"}  w-auto  md:p-0`}>
                <img src={props.src} alt={props.name}
                    className="md:max-w-lg md:grayscale transition-colors transform duration-100 ease-in-out group-hover:grayscale-0 "
                />
            </div>
            <div className={`min-w-fit order-first   ${props.reverse ? "md:order-first md:translate-x-10" : " md:text-end md:order-2 md:-translate-x-10"}`}>
                <Parallax speed={isXs || isSm ? 0 : 10} className="space-y-2">
                    <Link href={props.link ? props.link : props.github}>
                        <a target="_blank" className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase  tracking-wider md:order-2">{props.name}</a>
                    </Link>
                    <div className='gap-3  md:tracking-wide inline-flex  justify-start  flex-wrap  text-sm '>
                        {props.tech.map((ele, i) => <a className='whitespace-nowrap dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' key={i}>{ele}</a>)}
                    </div>
                    <div className={`${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10"}
                md:border-2 border-sky-700 /20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70   ease-in-out  dark:border-slate-500/50
                    transform ease-liner text-justify   md:p-5  rounded-xl  mx-auto md:backdrop-blur-md `}>
                        {props.description}
                    </div>
                    <div className="inline-flex gap-3 pt-3 text-2xl ">
                        {props.github &&
                            <Link href={props.github}>
                                <a target="_blank">
                                    <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300  " />
                                </a>
                            </Link>
                        }
                        {
                            props.link &&
                            <Link href={props.link}>
                                <a target="_blank">
                                    <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300 " />
                                </a>
                            </Link>
                        }
                    </div>
                </Parallax>
            </div >
        </div >
    </div >)
}