import react, { createContext, useState, useEffect } from 'react';
export const DarkLightContext = createContext();

export default function DarkLightTheme(props) {

    const [isDark, setDark] = useState(null);
    useEffect(() => {
        setDark(localStorage.theme === "dark" ? true : false)
    }, [])
    useEffect(() => {
        if (isDark) {
            localStorage.theme = "dark";
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove('dark')
        }

    }, [isDark])

    return (
        <DarkLightContext.Provider value={[isDark, setDark]}>
            {props.children}
        </DarkLightContext.Provider>
    )
}