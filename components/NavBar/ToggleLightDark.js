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
        <div onClick={toggle} className={`relative w-14  h-7 p-1  rounded-2xl border-2 e ${dark ? 'bg-black border-whit' : 'bg-white border-yellow-200'}`}>
            <div className={`absolute m-[2px] top-0  w-5 h-5  rounded-2xl transition left-0 ease-linear duration-200 ${dark ? "translate-x-7 bg-white" : "bg-yellow-300 translate-x-0 "}`}></div>
            <div className={`transform duration-500   absolute w-4 h-4  right-3 top-0 rounded-3xl ${dark ? "translate-x-0 bg-black" : "-z-10 bg-transparent -translate-x-10"}`} ></div>
        </div>
    )
}

export default ToggleLightDark