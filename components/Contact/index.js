import React from 'react'

function Experience() {
    return (

        <section className='p-5 md:p-10 bg-gradient-to-br  w-full'>
            <form className="p-2 justify-center gap-5 md:gap-10 flex flex-col md:flex-row md:p-10 mx-auto min-w-fit">
                <div className="space-y-8 text-center">
                    <h2 className='text-4xl font-semibold'>Let&#39;s Get In touch</h2>

                    <img className="w-full max-w-sm hover:scale-90 hover:translate-y-5 duration-500 transform ease-in-out" src="/contact.svg" />
                </div>
                <div className="flex-1  max-w-lg">
                    <div>
                        <span className="uppercase text-sm  font-bold">Full Name</span>
                        <input className="w-full bg-slate-300/50 focus:border-2 border-opacity-50 border-sky-600 dark:border-slate-500 dark:bg-slate-300/10 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm  font-bold">Email</span>
                        <input className="w-full bg-slate-300/50 focus:border-2 border-opacity-50 border-sky-600 dark:border-slate-500 dark:bg-slate-300/10 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm  font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-slate-300/50 focus:border-2 border-opacity-50 border-sky-600 dark:border-slate-500 dark:bg-slate-300/10 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button className="w-full rounded-2xl md:rounded-3xl p-3 sm:p-4 border-2 md:border-4 cursor-pointer select-none text-xl sm:text-xl font-semibold border-sky-600 hover:bg-gradient-to-l from-cyan-200/50 to-pink-100/50 dark:from-slate-900/50 dark:to-blue-900/50  transform ease-in-out duration-500 dark:border-slate-500   ">Send Message</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Experience