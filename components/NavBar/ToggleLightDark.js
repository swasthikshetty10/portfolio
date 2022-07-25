import React, { useEffect, useState } from 'react'

function ToggleLightDark() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (localStorage.theme === "dark") {
            setDark(true);
        }
    }, [])
    function toggle() {
        if (localStorage.theme === "dark") {
            setDark(false);
            localStorage.theme = "light";
            document.documentElement.classList.remove('dark')
        } else {
            setDark(true);
            localStorage.theme = "dark";
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <div onClick={toggle} className={`flex  relative w-14 bg-black h-7 p-1  rounded-2xl border-2 border-white`}>
            <div className={`absolute m-[2px] top-0  w-5 h-5 bg-white rounded-2xl transition left-0 ease-linear duration-200 ${dark ? "translate-x-7" : "translate-x-0"}`}></div>

        </div>
    )
}

export default ToggleLightDark