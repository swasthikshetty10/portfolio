import React, { useState } from 'react'
import ToggleLightDark from './ToggleLightDark'
import Image from 'next/image'
import navigations from './navigations'
import { ImCross } from "react-icons/im"
function NavBar() {
    const [active, setActive] = useState(false)
    return (
        <nav className=" bg-transperent backdrop-blur-xl px-3 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="transfor ease-linear duration-300 container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Swasthik Shettylogo Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Swasthik Shetty</span>
                </a>
                <div className="flex justify-center items-center gap-3 md:order-2">
                    <ToggleLightDark />
                    <button onClick={() => { setActive(!active) }} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-slate-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {!active ? <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            : <ImCross />
                        }
                    </button>
                </div>
                <div className={`${active ? "block" : "hidden"} text-lg text-center justify-between items-center w-full md:flex md:w-auto md:order-1`} >
                    <ul className="flex flex-col p-2 mt-4 backdrop-blur-lg bg-gray-50/50 rounded-lg border border-sky-300/50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-slate-800/50 md:dark:bg-transparent  dark:border-gray-700/50">
                        {
                            navigations().map((ele, idx) =>
                                <li className="relative" key={idx}>
                                    <a href={ele.href} onClick={() => { setActive(false) }} className="md:hover:scale-110 transform ease-in duration-200 cursor-pointer md:text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        {ele.name}
                                    </a>
                                </li >
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar