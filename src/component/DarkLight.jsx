import { useContext } from "react"
import { ThemeContext } from "../contextApi"

const DarkLight = () => {
  const{theme,handleTheme}=useContext(ThemeContext)

 
  return (
    <div className={`flex items-center justify-center flex-col h-screen  ${theme==="dark" ? "bg-zinc-900 text-white":"bg-white text-black"}`}>
      <h1>Dark Light Mode Website</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-5" onClick={handleTheme}>{theme ==="dark" ? "switch to Light Mode" :"switch to Dark Mode"}</button>
    </div>
  )
}

export default DarkLight