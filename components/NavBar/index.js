import React, { useState } from 'react'
import ToggleLightDark from './ToggleLightDark'
import Image from 'next/image'
import navigations from './navigations'
import { ImCross } from "react-icons/im"
import { FiDownload } from "react-icons/fi"
import Link from 'next/link'
import { Link as Scroll } from "react-scroll"
function NavBar() {
    const [active, setActive] = useState(false)
    return (
        <nav className="group bg-transperent backdrop-blur-xl px-3 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="transform ease-linear duration-300 container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a href="#" className=" flex gap-1 items-center">
                        <Image height={35} width={35} src="/logo.png" className="group-hover:rotate-90 transition ease-in-out duration-1000 mr-1 h-6 sm:h-10" alt="Swasthik Shettylogo Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white sm:tracking-widest ">SWASTHIK SHETTY</span>
                    </a>
                </Link>
                <div className="flex justify-center items-center gap-3 lg:order-2">
                    <Link href="/resume.pdf" target='_blank'>

                        <a target='_blank' className="hidden lg:inline-flex items-center gap-1 font-semibold animated-underline tracking-widest  lg:after:bg-sky-700 lg:dark:after:bg-white uppercase   cursor-pointer lg:text-lg  py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-sky-700 lg:p-0 lg:dark:hover:text-white dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Resume <FiDownload />
                        </a>
                    </Link>
                    <ToggleLightDark />
                    <button onClick={() => { setActive(!active) }} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-slate-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {!active ? <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            : <ImCross />
                        }
                    </button>
                </div>
                <div className={`${active ? "block" : "hidden"} text-lg text-center justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} >
                    <ul className="flex flex-col p-2 mt-4 backdrop-blur-lg bg-gray-50/50 rounded-lg border border-sky-300/50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-transparent dark:bg-slate-800/50 lg:dark:bg-transparent  dark:border-gray-700/50">
                        {
                            navigations().map((ele, idx) =>
                                <li className="relative" key={idx}>
                                    <Scroll to={ele.route} activeClass="active" smooth={true} spy={true} offset={-50} duration={1000} onClick={() => { setActive(false) }} className="animated-underline tracking-widest  lg:after:bg-sky-700 lg:dark:after:bg-white uppercase   cursor-pointer lg:text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-sky-700 lg:p-0 lg:dark:hover:text-white dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        {ele.name}
                                    </Scroll>
                                </li >
                            )
                        }
                        <li>
                            <a className="inline-flex w-full justify-center lg:hidden items-center gap-1  animated-underline tracking-widest  lg:after:bg-sky-700 lg:dark:after:bg-white uppercase   cursor-pointer lg:text-lg  py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-sky-700 lg:p-0 lg:dark:hover:text-white dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                Resume <FiDownload />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar