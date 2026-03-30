import { Palette } from "lucide-react"
import { useContext, useState } from "react"
import { Theme } from "../store/theme-store"

const ThemeSwitcher = () => {
  const [menu, setMenu] = useState(false)
  const { theme, setTheme } = useContext(Theme)
  return (
    <div className='relative'>
      <button
        onClick={() => setMenu((prev) => !prev)}
        className='flex items-center gap-2 '
      >
        <Palette className='size-4' />
        Theme
      </button>
      {menu && <Menu setTheme={setTheme} />}
    </div>
  )
}

export default ThemeSwitcher

const Menu = ({ setTheme }) => {
  return (
    <div className=' w-fit absolute right-0 top-8 p-4 rounded-xl border bg-white'>
      <div className='flex gap-4'>
        <Btn setTheme={setTheme} color='red' />
        <Btn setTheme={setTheme} color='green' />
        <Btn setTheme={setTheme} color='blue' />
        <Btn setTheme={setTheme} color='yellow' />
      </div>
    </div>
  )
}
const colorClasses = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
}
const Btn = ({ setTheme, color }) => {
  return (
    <button
      type='button'
      onClick={() => setTheme(`theme-${color}`)}
      className={`size-4 rounded-full ${colorClasses[color]}`}
    />
  )
}
