import { useEffect } from 'react'
import '../styles/globals.css'
import DarkLightTheme from '../context/darkContext'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (!("theme" in localStorage)) localStorage.theme = 'dark';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  return (
    <ParallaxProvider>
      <DarkLightTheme>
        <Component {...pageProps} />
      </DarkLightTheme>
    </ParallaxProvider>
  )
}

export default MyApp
