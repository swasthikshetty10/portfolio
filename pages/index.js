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
    <div className="bg-blue-100 dark:bg-indigo-900 h-[100vh] w-full">
      <NavBar />
      <Home />
    </div>
  );
}
