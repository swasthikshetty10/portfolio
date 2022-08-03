import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
export default function App() {
  function dark() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove('dark')
      localStorage.theme = "light"
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = "dark"
    }
  }

  return (
    <div className=" antialiased text-slate-700 dark:text-slate-300 bg-white  bg-gradient-to-r from-teal-50 via-sky-100 to-pink-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black    h-[100vh] w-full">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}
