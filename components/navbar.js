"use client"

import { useTheme } from "next-themes"

const Navbar = () => {
  const { setTheme, theme } = useTheme()  

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="m-6">
      <div className="flex gap-2">
      <h1 className="text-2xl font-extrabold tracking-tighter">TailFlow UI</h1>
      <button className="py-2 px-4 dark:bg-white bg-black dark:text-black text-white" onClick={handleTheme}>Dark Mode</button>
      </div>
    </div>
  )
}

export default Navbar