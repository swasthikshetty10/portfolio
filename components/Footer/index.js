import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

function Footer() {
    return (
        <section id="footer" className="bg-gradient-to-tr">
            <div className="p-5 md:p-10 tracking-wide text-center bg-gradient-to-r bg-opacity-10 from-pink-100 to-sky-200 dark:from-slate-800 dark:to-slate-900 text-semibold" >
                <Link href='https://github.com/swasthikshetty10'>

                    <a target='_blank'   >Designed & Built by <span className="cursor-pointer text-sky-800 dark:text-sky-300">Swasthik Shetty</span></a>
                </Link>
            </div>
        </section >
    )
}

export default Footer