
import React from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import Link from 'next/link'
import useScroll from '../../hooks/useScroll'

function Overlay() {
    const offset = useScroll()
    return (
        <>
            <div className={`hidden z-[999]   md:block fixed   ${offset < 150 ? "bottom-5 left-5  text-4xl" : "-rotate-90 left-8 lg:left-14 -bottom-5 text-xl "} origin-left  tracking-widest dark:opacity-80 cursor-pointer  transform ease-in-out duration-700  `}>
                <a className=' flex items-center gap-7'><span className={`${offset < 150 ? "w-0 h-[1px]" : "w-28 h-[1px]"} bg-slate-700 delay-500 dark:bg-slate-300 transform ease-in-out duration-500   `}></span>
                    <span className="flex flex-wrap justify-center gap-5 ">
                        <Link href="mailto:swasthikshetty10902@gmail.com"><a className={`${offset < 150 ? "rotate-0" : "rotate-90"}  hover:scale-110 transform duration-500 ease-in-out`} target="_blank"><HiOutlineMail /></a></Link>
                        <Link href="https://wa.link/xcfy4e"><a className={` ${offset < 150 ? "rotate-0" : "rotate-90"} hover:scale-110 transform duration-400 ease-in-out`} target="_blank"><FaWhatsapp /></a></Link>
                        <Link href="https://www.linkedin.com/in/swasthikshetty10/"><a className={`${offset < 150 ? "rotate-0" : "rotate-90"} hover:scale-110 transform duration-500 ease-in-out`} target="_blank"><FaLinkedin /></a></Link>
                        <Link href="https://github.com/swasthikshetty10"><a className={`${offset < 150 ? "rotate-0" : "rotate-90"} hover:scale-110 transform duration-500 ease-in-out`} target="_blank"><FaGithub /></a></Link>
                    </span>
                </a>
            </div>
            <div className='hidden md:block fixed -bottom-5 right-8 lg:right-14 rotate-90 origin-right text-sm tracking-widest dark:opacity-80 cursor-pointer '>
                <Link href="mailto:swasthikshetty10902@gmail.com">
                    <a className=' flex items-center gap-7'>swasthikshetty10902@gmail.com <span className='bg-slate-700 dark:bg-slate-300 h-[1px] w-28'></span></a>
                </Link>
            </div>
        </>
    )
}

export default Overlay
