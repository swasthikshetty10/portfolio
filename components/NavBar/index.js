import React from 'react'
import ToggleLightDark from './ToggleLightDark'
import Image from 'next/image'
function index() {
    return (

        <div>
            {/* <div className='h-36 w-full select-none'>
                <img className='h-36' src="/logo.png" alt="swasthik shetty logo" />
            </div> */}
            <ToggleLightDark />
        </div>
    )
}

export default index