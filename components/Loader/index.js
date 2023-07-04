import Image from 'next/image'
import React from 'react'

function Loader() {
    // disable scrolling
    React.useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])
    return (
        <div className='overflow-y-hidden fixed  top-0 right-0 left-0  flex-col   w-full h-screen  z-[9999] text-center flex items-center justify-center
        text-slate-700 dark:text-slate-300   bg-gradient-to-r from-teal-50 via-sky-100 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-black  
        '>
            <Image alt="Logo" width="100" height="100" className="w-20 md:w-28 h-auto animate-spin" src="/logo.png" />
            <div className='flex justify-center text-2xl gap-1 mt-2 items-end'>
                <span className=''>Loading</span>
                <span className='animate-pulse delay-0 duration-[3000]' >.</span>
                <span className='animate-pulse delay-[1000] duration-[2000] ' >.</span>
                <span className='animate-pulse delay-[2000] duration-1000' >.</span>
            </div>
        </div>
    )
}

export default Loader