import React from 'react'
import ToggleLightDark from './ToggleLightDark'
import Image from 'next/image'
function index() {
    return (

        <div className="z-[999] fixed top-0 w-full p-5 flex gap-3 backdrop-blur-md shadow-lg shadow-sky-200 dark:shadow-slate-900/95">
            <div className="text-2xl  font-semibold  ">
                Swasthik Shetty
            </div>

            <ToggleLightDark />
        </div>
    )
}

export default index