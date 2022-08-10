import React from 'react'
import { Slide } from 'react-awesome-reveal'

function Footer() {
    return (
        <section id="footer" className="bg-gradient-to-tr">

            <Slide direction="up">
                <div className="p-5 md:p-10 tracking-wide text-center bg-gradient-to-r bg-opacity-10 from-pink-100 to-sky-200 dark:from-slate-800 dark:to-slate-900 text-semibold" >
                    <a>Designed & Built by <span className="text-sky-800 dark:text-sky-300">Swasthik Shetty</span></a>

                </div>
            </Slide>
        </section >
    )
}

export default Footer