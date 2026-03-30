import { Link, NavLink } from "react-router"
import ThemeSwitcher from "./theme-switcher"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center border-b border-primary/30 h-16 px-4 bg-secondary'>
      <Link to={"/"} className='text-xl font-bold text-primary'>
        Logo
      </Link>

      <div className='flex items-center space-x-6'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `text-primary font-medium transition-colors hover:text-primary/80 ${
              isActive ? "text-primary border-b-2 border-primary" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            `text-primary font-medium transition-colors hover:text-primary/80 ${
              isActive ? "text-primary border-b-2 border-primary" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            `text-primary font-medium transition-colors hover:text-primary/80 ${
              isActive ? "text-primary border-b-2 border-primary" : ""
            }`
          }
        >
          Contact
        </NavLink>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
