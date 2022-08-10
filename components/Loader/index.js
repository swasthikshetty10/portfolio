import React from 'react'

function Loader() {
    return (
        <div className='fixed  top-0 right-0 left-0 text-center flex-col   w-full h-screen  z-[9999] text-center flex items-center justify-center
        text-slate-700 dark:text-slate-300   bg-gradient-to-r from-teal-50 via-sky-100 to-pink-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black  
        '>
            <img className="w-20 md:w-28 h-auto animate-spin" src="/logo.png" />
            <p className='p-3 text-2xl   '>Loading...</p>
        </div>
    )
}

export default Loader