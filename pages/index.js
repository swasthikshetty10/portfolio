import NavBar from '../components/NavBar'
export default function Home() {
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
    <div className="bg-blue-400 dark:bg-red-500 h-[100vh] w-full">
      <NavBar />
    </div>
  );
}
