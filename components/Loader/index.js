import React from 'react'

function Loader() {
    return (
        <div className='absolute top-0 left-0 w-screen h-screen bg-slate-900 z-[9999] text-center flex items-center justify-center'>
            <div>
                <img className="w-14 md:w-28 h-auto animate-spin" src="/logo.png" />
                <p className='p-3 text-2xl  text-slate-100'>Loading...</p>
            </div>
        </div>
    )
}

export default Loader