import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import Loader from '../components/Loader'
import Overlay from '../components/Overlay'
import { useEffect } from 'react'

export default function App() {
  const [loadingWave, setLoadingWave] = useState(true)
  const [loadingSetup, setLoadingSetup] = useState(true)
  // disable scrolling if loading
  const mainRef = React.useRef(null);
  useEffect(() => {
    if (loadingWave) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [loadingWave])

  return (<main>
    {(loadingWave) && <Loader />}
    <div className={`relative overflow-y-hidden antialiased text-slate-700 dark:text-slate-300   bg-gradient-to-r from-teal-50 via-sky-100 to-pink-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black   w-full`} >
      <NavBar />
      <Home setLoading={setLoadingWave} />
      <About />
      <Skills setLoading={setLoadingSetup} />
      <Projects />
      <Contact />
      <Footer />
      <Overlay />
    </div>
  </main >
  );
}

