import NavBar from '../components/NavBar'
import Home from '../components/Home'
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
    <Home />
    // <div className="bg-gray-100 dark:bg-purple-700 h-[100vh] w-full">
    //   <NavBar />
    // </div>
  );
}
